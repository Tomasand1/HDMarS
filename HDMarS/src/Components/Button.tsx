import React from 'react';
import styled from 'styled-components/native';
import { marginMixin } from '../Themes/Mixins';
import { Colors, Metrics } from '../Themes';
import { ButtonText } from './Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonWrapper = styled.TouchableOpacity`
    border-radius: ${Metrics.buttonRadius};
    height: ${(props) => (props.height ? props.height : 45)};
    background-color: ${(props) =>
        props.outlined
            ? Colors.white
            : props.fullWhite
            ? Colors.white
            : Colors.tintColor};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(p) => p.outlined && `border-width: 2`};
    border-color: ${(props) =>
        props.outlined ? Colors.tintColor : 'transparent'};
    ${marginMixin}
`;

const ViewWrapper = styled.View`
    justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
    flex: 1;
    flex-direction: ${(props) =>
        props.flexDirection ? props.flexDirection : 'column'};
    padding-left: ${Metrics.space.md};
    padding-right: ${Metrics.space.md};
`;

const Button = (props) => {
    const text = (
        <ButtonText
            color={
                props.textColor
                    ? props.textColor
                    : props.outlined
                    ? Colors.tintColor
                    : props.fullWhite
                    ? Colors.darkGray
                    : Colors.white
            }>
            {props.children}
        </ButtonText>
    );

    if (props.iconName) {
        return (
            <ButtonWrapper {...props}>
                <ViewWrapper
                    flexDirection={props.flexDirection}
                    justifyContent={props.justifyContent}>
                    <Ionicons
                        name={props.iconName}
                        size={
                            props.iconSize
                                ? props.iconSize
                                : Metrics.icons.small
                        }
                        focused={props.focused ? props.focused : ''}
                        color={Colors.white}
                    />
                    {text}
                </ViewWrapper>
            </ButtonWrapper>
        );
    }

    return (
        <ButtonWrapper {...props} onPress={props.onPress}>
            {text}
        </ButtonWrapper>
    );
};

export default Button;
