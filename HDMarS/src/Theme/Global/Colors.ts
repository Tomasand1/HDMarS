type PrimaryColor = {
    primary100: string;
    primary050: string;
    primary020: string;
    primary010: string;
};
type AssetColor = {
    white: string;
    black: string;
    googleBlue: string;
    facebookBlue: string;
    grey: string;
};
type AccentColor = {
    red100: string;
    green100: string;
    amber100: string;
    blue100: string;
    purple100: string;
    navigationGrey: string;
};
const primaryColors: PrimaryColor = {
    primary100: '#23282F',
    primary050: '#6A757B',
    primary020: '#C2D1D9',
    primary010: '#F2F5F7',
};
const accentColors: AccentColor = {
    red100: '#C1272D',
    green100: '#22B573',
    amber100: '#FFA730',
    blue100: '#00AEEF',
    purple100: '#6C1CF8',
    navigationGrey: '#f8f8f8',
};
const assetColors: AssetColor = {
    white: '#ffffff',
    black: '#000000',
    googleBlue: '#4286F5',
    facebookBlue: '#3B5999',
    grey: '#707070',
};

export default { assetColors, accentColors, primaryColors };
