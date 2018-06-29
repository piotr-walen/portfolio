import * as React from 'react';
import { withTheme } from 'styled-components';
import ITheme from '@typings/ITheme';
import { theme } from '@theme';

const ReduxIcon = () => (
    <svg viewBox="0 0 100 100" width="24" height="24">
        <g fill={theme.fontPrimaryColor}>
            <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
            <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
            <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
        </g>
    </svg>
);

const WebpackIcon = () => (
    <svg viewBox="0 0 600 600" width="24" height="24">
        <path
            fill={theme.fontPrimaryColor}
            d="M300 .1L565 150v299.9L300 599.8 35 449.9V150z"
        />
        <path
            fill={theme.backgroundColor}
            d="M517.7 439.5L308.8 557.8v-92L439 394.1l78.7 45.4zm14.3-12.9V179.4l-76.4 44.1v159l76.4 44.1zM81.5 439.5l208.9 118.2v-92l-130.2-71.6-78.7 45.4zm-14.3-12.9V179.4l76.4 44.1v159l-76.4 44.1zm8.9-263.2L290.4 42.2v89l-137.3 75.5-1.1.6-75.9-43.9zm446.9 0L308.8 42.2v89L446 206.8l1.1.6 75.9-44z"
        />
        <path
            fill={theme.backgroundColor}
            d="M290.4 444.8L162 374.1V234.2l128.4 74.1v136.5zm18.4 0l128.4-70.6v-140l-128.4 74.1v136.5zM299.6 303zm-129-85l129-70.9L428.5 218l-128.9 74.4-129-74.4z"
        />
    </svg>
);

const MongoIcon = () => (
    <svg viewBox="0 0 250 250" width="24" height="24">
        <g id="mongodb-leaf">
            <path
                fill={theme.fontPrimaryColor}
                d="m132.118576,245.311905l-6.359024,-2.172424c0,0 0.776367,-32.416153 -10.856194,-34.742371c-7.755051,-8.99585 1.240746,-381.551559 29.158333,-1.240768c0,0 -9.615448,4.807755 -11.322021,13.02858c-1.861847,8.065567 -0.621094,25.126984 -0.621094,25.126984l0,0l0,0z"
            />
            <path
                fill={theme.fontPrimaryColor}
                d="m133.219955,217.975906c0,0 62.153046,-34.939911 43.96405,-116.754906c-12.562012,-55.3708 -42.188004,-73.5177 -45.444,-80.497801c-3.567001,-4.963 -6.980003,-13.64824 -6.980003,-13.64824l2.326996,154.015036c0,0.156006 -6.245499,51.043503 6.008507,56.782501"
            />
            <path
                fill={theme.fontHighlightColor}
                d="m122.50312,215.996826c0,0 -52.269646,-35.674057 -49.167053,-98.489357c2.945869,-62.816769 39.86071,-93.681702 46.994659,-99.265772c4.6539,-4.962999 4.809174,-6.824864 5.119713,-11.787839c3.256439,6.980127 2.63678,104.384009 3.101166,115.86132c1.396027,44.204063 -2.481499,85.306969 -6.048485,93.681648l0,0l0,0z"
            />
        </g>
    </svg>
);

const PostgreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 432.071 445.383">
        <g>id="orginal"</g>
        <path
            fill={theme.fontPrimaryColor}
            d="M 402.395,271.23 C 352.093,281.606 348.635,264.575 348.635,264.575 C 401.746,185.767 423.948,85.732 404.788,61.249 C 352.518,-5.536 262.036,26.049 260.526,26.869 L 260.04,26.956 C 250.102,24.893 238.98,23.664 226.48,23.46 C 203.719,23.087 186.454,29.427 173.353,39.362 C 173.353,39.362 11.942,-27.133 19.449,122.992 C 21.046,154.93 65.225,364.649 117.92,301.304 C 137.18,278.141 155.789,258.556 155.789,258.556 C 165.032,264.696 176.097,267.828 187.697,266.703 L 188.598,265.938 C 188.318,268.814 188.446,271.627 188.959,274.957 C 175.384,290.124 179.373,292.787 152.236,298.373 C 124.777,304.032 140.908,314.107 151.44,316.74 C 164.208,319.933 193.747,324.456 213.706,296.516 L 212.91,299.704 C 218.229,303.964 221.964,327.415 221.338,348.673 C 220.712,369.932 220.294,384.527 224.485,395.927 C 228.676,407.327 232.853,432.977 268.527,425.333 C 298.336,418.945 313.783,402.391 315.932,374.778 C 317.457,355.147 320.908,358.049 321.126,340.498 L 323.894,332.189 C 327.086,305.578 324.401,296.993 342.766,300.986 L 347.229,301.378 C 360.746,301.993 378.437,299.204 388.82,294.378 C 411.178,284.002 424.438,266.678 402.393,271.23 L 402.395,271.23 z"
        />
    </svg>
);
interface Icons {
    [key: string]: Function;
}

const Icons: Icons = {
    redux: ReduxIcon,
    webpack: WebpackIcon,
    mongo: MongoIcon,
    postgre: PostgreIcon,
};

interface IconProps {
    theme: ITheme;
    name: string;
}

const Icon = ({ theme, name }: IconProps) => Icons[name]({ theme });

export default withTheme(Icon);
