import { css } from 'styled-components/native';

const tintColor = '#3C81F0';

const lightShadow = css`
  shadow-color: #000000;
  shadow-offset: {width: 0, height: 3};
  shadow-opacity: 0.05;
  shadow-radius: 10;
  elevation: 1;
`;

const colors = {
    tintColor,

    //Tab Bar
    tabIconDefault: '#ADB3C7',
    tabIconSelected: tintColor,
    tabBar: '#fefefe',

    //Error
    errorBackground: '#FFE2E2',
    errorText: '#D98989',

    //Success
    successBackground: '#5CDB8E',
    successText: '#489C71',

    //Warning
    warningBackground: '#EAEB5E',
    warningText: '#666804',

    //Notice
    noticeBackground: tintColor,
    noticeText: '#ffffff',

    black: '#000000',
    white: '#FFFFFF',
    strongRed: '#EB5353',
    lightRed: '#D98989',
    strongGreen: '#5CDB8E',
    yellow: '#F9BD49',
    yellowOranged: '#F78F2D',
    darkGray: '#747A8E',
    gray: '#ADB3C7',
    lightGray: '#F3F5F9',
    placeholderInput: '#ACBECE',
    lowRisk: '#E2FFE5',
    highRisk: '#FFE2E2',
    lightOrange: '#F0B277',

    black: '#000000',

    shadows: {
        lightShadow,
    },

    lightGreen: '#E2FFE5',

    calendarBarBackground: '#D98989',
    mediumRed: '#D98989',
    darkRed: '#951515',
};

export default colors;
