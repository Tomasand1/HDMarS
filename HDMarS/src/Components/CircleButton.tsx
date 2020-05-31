import React from 'react';
import styled from 'styled-components/native';
import { marginMixin } from '../Themes/Mixins';
import { Colors, Metrics, Fonts } from '../Themes';
import { ButtonText } from './Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    onPress: any;
    image: any;
    text: string;
    full: boolean;
}

const CircleButton = (props) => {
    return (
        <MainView>
            <ImageTouchable
            activeOpacity={0.7}
                {...props}
                onPress={() => props.onPress(props.text)}>
                <CustomImage {...props} source={props.image} />
            </ImageTouchable>
            <CustomText {...props}>{props.text}</CustomText>
        </MainView>
    );
};

const MainView = styled.View`
    flex-direction: column;
    align-items: center;
`;

const CustomText = styled.Text<Props>`
    margin-right: 10px;
    padding-top: 5px;
    text-align: center;
    font-family: ${Fonts.type.base};
    color: ${Colors.darkGray};
    ${(props) => props.full && `font-family: ${Fonts.type.bold};`}
`;

const ImageTouchable = styled.TouchableOpacity<Props>`
    margin-right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    justify-content: center;
    margin-top: 20px;
    border-width: 2px;
    border-color: ${Colors.tintColor};
    ${(props) => props.full && `border-width: 3px`}
`;

const CustomImage = styled.Image<Props>`
    width: 70%;
    height: 70%;
    align-self: center;
    border-radius: 100px;
    ${(props) => props.full && `width: 85%; height: 85%`}
`;

export default CircleButton;
