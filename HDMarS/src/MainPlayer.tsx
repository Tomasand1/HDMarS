import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Metrics from './Theme/Global/Metrics';
import Colors from './Theme/Global/Colors';
import ImageTouchable from './Components/ImageTouchable';
import { topMessage } from './Components/Global/TopMessage';
import SoundPlayer from 'react-native-sound-player';

const MainPlayer = () => {
    const [imageURL, setImageURL] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setImageURL(
            'https://mars.nasa.gov/system/resources/detail_files/5301_7_methane1_Mars_Methane_Mystery-full2.jpg',
        );
        // setTimeout(() => {
        //     playFile();
        // }, 2000);
    }, []);

    const handlePlay = () => {
        shouldChange();
        if (isPlaying) {
            stopFile();
        } else {
            postImage();
        }
        setIsPlaying(!isPlaying);
    };

    const stopFile = () => {
        try {
            topMessage('PAUSE');
            SoundPlayer.pause();
        } catch (err) {
            console.log('cannot pause the sound file', err);
            topMessage(`${err}`);
        }
    };

    const postImage = () => {
        playFile();
    };

    const playFile = () => {
        try {
            topMessage('PLAY', '', 'success');
            SoundPlayer.playUrl('https://ac932859160d.ngrok.io/play');
        } catch (err) {
            console.log('cannot play the sound file', err);
            topMessage(`${err}`);
        }
    };

    const shouldChange = () => {
        let bg = Colors.assetColors.white;
        if (isPlaying) {
            bg = 'cyan';
        }
        return bg;
    };

    return (
        // <ApplicationView>
            <SafeAreaView>
                <MainView>
                    <CoverTouchable activeOpacity={0.9} onPress={handlePlay}>
                        <CoverImage
                            source={{
                                uri: imageURL,
                            }}
                        />
                    </CoverTouchable>
                </MainView>
            </SafeAreaView>
            // <FlashMessage position="top" />
        // </ApplicationView>
    );
};

const MainView = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: red;
`;


const CoverTouchable = styled.TouchableOpacity`
    width: 90%;
    height: 400px;
`;

const CoverImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export default MainPlayer;
