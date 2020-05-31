import React from 'react';
import styled from 'styled-components/native';
import Metrics from '../Theme/Global/Metrics';

interface Props {
    source: any;
    onPress: any;
    onInfo: any;
    title: string;
    date: string;
}

const ImageTouchable = (props: Props) => {
    return (
        <CustomMainView activeOpacity={0.9} onPress={props.onPress}>
            <TitleText>{props.title}</TitleText>
            <DateText>{props.date}</DateText>
            <CustomImage source={props.source} />
            <Mask />
        </CustomMainView>
    );
};

const TitleText = styled.Text`
    color: white;
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    align-self: center;
    position: absolute;
    z-index: 1;
    width: 70%;
`;

const CustomMainView = styled.TouchableOpacity`
    width: 90%;
    height: 200px;
    margin-top: 10px;
    align-self: center;
    justify-content: center;
`;

const CustomImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

const DateText = styled.Text`
    color: white;
    font-size: 11px;
    text-align: center;
    font-weight: 600;
    align-self: center;
    position: absolute;
    z-index: 1;
    width: 70%;
    bottom: 10;
`;

const Mask = styled.View`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export default ImageTouchable;
