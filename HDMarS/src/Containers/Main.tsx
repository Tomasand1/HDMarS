import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import Metrics from '../Theme/Global/Metrics';
import Colors from '../Theme/Global/Colors';
import ImageTouchable from '../Components/ImageTouchable';
import { topMessage } from '../Components/Global/TopMessage';
import { processUrl } from '../Functions/router';
import SoundPlayer from 'react-native-sound-player';

const Main = (props: any) => {
    const [images, setImages] = useState([] as any[]);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        setImages([
            'https://mars.nasa.gov/system/resources/detail_files/5301_7_methane1_Mars_Methane_Mystery-full2.jpg',
            'https://mars.nasa.gov/system/resources/detail_files/5258_9_Canyon_Junction-full2.jpg',
            'https://mars.nasa.gov/system/resources/detail_files/5250_4_Small_Floral_Shaped_Volcano-full2.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGhqTYNWPhdYqB_OpSVnMTCLsl2JOBBNuaYJeYIKrgIbxkMpZm&usqp=CAU',
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
            topMessage('STOP');
            SoundPlayer.stop();
        } catch (err) {
            console.log('cannot pause the sound file', err);
            topMessage(`${err}`);
        }
    };

    const postImage = async (imageURL: any) => {
        topMessage('POST');
        // await post(imageURL);
        await processUrl(imageURL);
        playFile();
        // getInfo();
    };

    const playFile = () => {
        try {
            SoundPlayer.setSpeaker(false);
            topMessage('PLAY', '', 'success');
            SoundPlayer.playUrl('https://ac932859160d.ngrok.io/play');
        } catch (err) {
            console.log('cannot play the sound file', err);
            topMessage(`${err}`);
        }
    };

    const changeBG = () => {
        let bg = Colors.assetColors.white;
        if (isPressed) {
            bg = 'cyan';
        }
        return bg;
    };

    return (
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
    );
};

const MainView = styled.View`
    width: ${Metrics.screenWidth}px;
    height: ${Metrics.screenHeight}px;
    align-items: center;
    justify-content: center;
`;

export default Main;
