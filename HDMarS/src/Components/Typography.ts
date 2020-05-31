import { Colors, Fonts } from '../Themes';

import styled from 'styled-components/native';
import { marginMixin } from '../Themes/Mixins';

export const Title1 = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.tintColor)};
    font-size: ${Fonts.size.title1};
    font-family: ${Fonts.type.medium};
    ${marginMixin};
`;

export const Title2 = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.darkGray)};
    font-size: ${Fonts.size.title2};
    font-family: ${Fonts.type.base};
    ${marginMixin};
`;

export const Subhead = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.darkGray)};
    font-size: ${Fonts.size.subhead};
    font-family: ${Fonts.type.base};
    ${marginMixin};
`;

export const Headline = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.darkGray)};
    font-size: ${Fonts.size.headline};
    font-family: ${Fonts.type.bold};
    ${marginMixin};
`;

export const Body = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.darkGray)};
    font-size: ${Fonts.size.body};
    font-family: ${Fonts.type.base};
    ${marginMixin};
`;

export const Caption = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.darkGray)};
    font-size: ${Fonts.size.caption};
    font-family: ${Fonts.type.base};
    ${marginMixin};
`;

export const ButtonText = styled.Text`
    color: ${(props) => (props.color ? props.color : Colors.white)};
    font-size: ${Fonts.size.body};
    font-family: ${Fonts.type.medium};
    ${marginMixin};
`;
