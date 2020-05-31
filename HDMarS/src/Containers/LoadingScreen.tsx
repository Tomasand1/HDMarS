import React, { useState, useEffect } from 'react';

import styled from 'styled-components/native';

import { Colors, Fonts, marginMixin } from '../Themes';
import LottieView from 'lottie-react-native';
import { processUrl } from '../Functions/router';
import { topMessage } from '../Components/Global/TopMessage';

const LoadingWrapper = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.white};
    opacity: 0.95;
    z-index: 999999;
`;

const LoadingScreen = (props: any) => {
    const { route, navigation } = props;
    console.log(props);
    const [url, setUrl] = useState();
    const [loading, setLoading] = useState(true);

    const processImage = async (image: any) => {
        console.log(route);
        await processUrl(
            image[0],
            route.params.type,
            route.params.intensity,
            route.params.time,
        );

        setLoading(false);
        handleOnNext(image, route.params.time);
    };
    useEffect(() => {
        if (route.params) {
            setUrl(route.params.image);
            processImage(route.params.image);
        } else {
            topMessage('Loading failed, please try again', 'error');
            navigation.goBack();
        }
    }, []);

    const handleOnNext = (image: any, time: string) => {
        console.log('here');
        console.log('done');
        navigation.navigate('MainPlayer', { image, time });
    };

    return (
        <LoadingWrapper>
            <TitleView>
                <LoadingText>
                    Please wait while we generate your sound waves
                </LoadingText>
            </TitleView>
            <LottieView
                autoPlay
                loop
                source={require('../Assets/Animations/loading.json')}
            />
        </LoadingWrapper>
    );
};

const TitleView = styled.View`
    position: absolute;
    bottom: 30%;
    justify-content: center;
    align-items: center;
    padding: 70px;
    padding-bottom: 30px;
`;

const LoadingText = styled.Text`
    color: #808080;
    font-size: 20px;
    font-family: ${Fonts.type.medium};
    ${marginMixin};
    text-align: center;
`;

export default LoadingScreen;
