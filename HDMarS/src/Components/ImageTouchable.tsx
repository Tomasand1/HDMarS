import React from 'react';
import styled from 'styled-components/native';
import Metrics from '../Theme/Global/Metrics';

interface Props {
    source: any;
    onPress: any;
}

const ImageTouchable = (props: Props) => {
    return (
        <CustomTouchable onPress={props.onPress}>
            <CustomImage source={props.source} />
        </CustomTouchable>
    );
};

const CustomTouchable = styled.TouchableOpacity`
    width: ${Metrics.images.xxl}px;
    height: ${Metrics.images.xxl}px;
`;

const CustomImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export default ImageTouchable;
