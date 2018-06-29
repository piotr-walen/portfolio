import * as React from 'react';
import styled, { withTheme } from 'styled-components';

import Navbar from '@containers/Navbar';
import Pages from '@components/Pages';
import Home from '@components/Home';
import Projects from '@components/Projects';
import Skills from '@components/Skills';

import IView from '@typings/IView';
import ITheme from '@typings/ITheme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

export interface AppProps {
    setCurrentPage: (page: number) => void;
}

class App extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
        this.boxes = new Map<IView, HTMLDivElement>();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            passive: true,
        });
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.props.setCurrentPage(currentPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: Event) => {
        const currentPage = Math.round(window.pageYOffset / window.innerHeight);
        this.props.setCurrentPage(currentPage);
    };

    boxes: Map<IView, HTMLDivElement>;

    createHandler = (view: IView) => (): void => {
        window.scrollTo({
            top: this.boxes.get(view).offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };

    createRef = (view: IView) => (ref: HTMLDivElement): void => {
        this.boxes.set(view, ref);
    };

    render() {
        const views = [
            { name: 'Home', component: <Home /> },
            {
                name: 'Skills',
                component: <Skills />,
            },
            {
                name: 'Projects',
                component: <Projects />,
            },
        ];

        return (
            <div className="App">
                <Navbar views={views} createHandler={this.createHandler} />
                <Pages
                    views={views}
                    createHandler={this.createHandler}
                    createRef={this.createRef}
                />
            </div>
        );
    }
}

export default App;
