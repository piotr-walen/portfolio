import { dimensions } from '@constants/dimensions';
import theme from '@constants/theme';
import IView from '@typings/IView';
import * as React from 'react';
import styled from 'styled-components';
import media from '@constants/media';

const Box = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: ${(props: { height: string }) => props.height};
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    width: ${({ current }: { current: boolean }) => (current ? '100%' : '0')};
    transition: width 0.1s linear;
    border-bottom: 2px dashed ${theme.fontPrimaryColor};
`;

const Button = styled.button`
    font-family: 'Roboto Condensed';
    height: ${({ height }: { height: string }) => height};
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.fontPrimaryColor};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin: 10px 0 10px 20px;
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${theme.fontHighlightColor};
    }
    &:hover ${Line} {
        border-bottom: 2px dashed ${theme.fontHighlightColor};
    }

    ${media.md`
        font-size: 20px;
        display: none;
    `};
`;

export interface NavbarProps {
    views: IView[];
    createHandler: (view: IView) => any;
    currentPage: number;
}

const Navbar = ({ views, createHandler, currentPage }: NavbarProps) => {
    const Links = views.map((view, index) => {
        return (
            <Button
                height={dimensions.navbar.height}
                key={view.name}
                onClick={createHandler(view)}
            >
                <Line current={currentPage === index} />
                <span>{view.name}</span>
            </Button>
        );
    });
    return <Box height={dimensions.navbar.height}>{Links}</Box>;
};

export default Navbar;
