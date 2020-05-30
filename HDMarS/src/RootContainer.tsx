import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Metrics from './Theme/Global/Metrics';
import Colors from './Theme/Global/Colors';
import ImageTouchable from './Components/ImageTouchable';
import { topMessage } from './Components/Global/TopMessage';
import { post, processUrl } from './Functions/router';
// import AppNavigation from '../Navigation/AppNavigation';
import SoundPlayer from 'react-native-sound-player';

const RootContainer = () => {
    const [images, setImages] = useState([] as any[]);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        setImages([
            'https://mars.nasa.gov/system/resources/detail_files/5301_7_methane1_Mars_Methane_Mystery-full2.jpg',
            'https://mars.nasa.gov/system/resources/detail_files/5258_9_Canyon_Junction-full2.jpg',
            'https://mars.nasa.gov/system/resources/detail_files/5250_4_Small_Floral_Shaped_Volcano-full2.jpg',
        ]);
    }, []);

    const handlePlay = (imageURL: string): void => {
        changeBG();
        if (isPressed) {
            stopFile();
        } else {
            postImage(imageURL);
        }
        setIsPressed(!isPressed);
    };

    const stopFile = () => {
        try {
            SoundPlayer.stop();
        } catch (err) {
            console.log('cannot pause the sound file', err);
            topMessage(`${err}`);
        }
    };

    const postImage = async (imageURL: any) => {
        topMessage('Pressed');
        await post(imageURL);
        playFile();
        getInfo();
    };

    const playFile = () => {
        try {
            SoundPlayer.playUrl('https://a115cfabd0df.ngrok.io/play');
            topMessage('playing');
        } catch (err) {
            console.log('cannot play the sound file', err);
            topMessage(`${err}`);
        }
    };

    const getInfo = async () => {
        try {
            const info = await SoundPlayer.getInfo();
            console.log('getInfo', info);
        } catch (e) {
            console.log('There is no song playing', e);
        }
    };

    const changeBG = () => {
        let bg = 'red';
        if (isPressed) {
            bg = 'cyan';
        }
        return bg;
    };

    return (
        <ApplicationView>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
            />
            <SafeAreaView>
                <MainView style={{ backgroundColor: changeBG() }}>
                    {images.map((imageURL: string) => {
                        return (
                            <ImageTouchable
                                onPress={() => handlePlay(imageURL)}
                                source={{
                                    uri: imageURL,
                                }}
                            />
                        );
                    })}
                </MainView>
            </SafeAreaView>
            <FlashMessage position="top" />
        </ApplicationView>
    );
};

const MainView = styled.View`
    width: ${Metrics.screenWidth}px;
    height: ${Metrics.screenHeight}px;
    align-items: center;
    justify-content: center;
`;

const ApplicationView = styled.View`
    flex: 1;
    background-color: ${Colors.assetColors.white};
`;

export default RootContainer;
