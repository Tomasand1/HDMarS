import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { topMessage } from '../Components/Global/TopMessage';
import SoundPlayer from 'react-native-sound-player';
import colors from '../Themes/Colors';
import { Fonts } from '../Themes';
import { Title1, Caption } from '../Components/Typography';

const MainPlayer = (props: any) => {
    const { route } = props;
    const [imageURL, setImageURL] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [played, setPlayed] = useState(false);

    useEffect(() => {
        const url = route.params.image[0];
        setImageURL(url);
        setDescription(route.params.image[3]);
        setTitle(route.params.image[1]);
        setDate(route.params.image[2]);
        // setTimeout(() => {
        //     playFile();
        // }, 2000);
    }, [route.params.image]);

    const handlePlay = () => {
        if (isPlaying) {
            stopFile();
        } else if (!played) {
            setLoading(true);
            playFile();
        } else {
            resumeFile();
        }
        setIsPlaying(!isPlaying);
    };

    const stopFile = () => {
        try {
            SoundPlayer.pause();
        } catch (err) {
            console.log('cannot pause the sound file', err);
            topMessage(`${err}`);
        }
    };

    const resumeFile = () => {
        try {
            SoundPlayer.resume();
        } catch (err) {
            console.log('cannot pause the sound file', err);
            topMessage(`${err}`);
        }
    };

    const playFile = async () => {
        try {
            if (!played) {
                await SoundPlayer.playUrl('https://ac932859160d.ngrok.io/play');
                console.log(loading);

                setPlayed(true);
                setLoading(false);
            }
        } catch (err) {
            console.log('cannot play the sound file', err);
            topMessage(`${err}`);
        }
    };

    return (
        <SafeAreaView>
            <MainView>
                <CoverTouchable activeOpacity={0.9} onPress={handlePlay}>
                    <CoverImage
                        source={{
                            uri: imageURL,
                        }}
                    />
                </CoverTouchable>
                <DescriptionView>
                    <Title1>{title}</Title1>
                    <Caption>{date}</Caption>
                    <Description>{description}</Description>
                </DescriptionView>
                <PlayButton onPress={handlePlay}>
                    <PlayText>
                        {isPlaying
                            ? loading
                                ? 'Loading...'
                                : 'Pause'
                            : played
                            ? 'Resume '
                            : 'Play'}
                    </PlayText>
                </PlayButton>
            </MainView>
        </SafeAreaView>
    );
};

const MainView = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    align-items: center;
    justify-content: space-between;
`;

const CoverTouchable = styled.TouchableOpacity`
    width: 90%;
    height: 400px;
`;

const DescriptionView = styled.View`
    padding-top: 30px;
    align-items: center;
    justify-content: flex-start;
    font-family: ${Fonts.type.light};
    flex: 1;
    width: 100%;
`;

const Description = styled.Text`
    color: black;
    text-align: center;
    font-size: 16px;
    padding-top: 15px;
`;

const PlayButton = styled.TouchableOpacity`
    width: 130px;
    height: 130px;
    background-color: ${colors.tintColor};
    border-radius: 200px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const PlayText = styled.Text`
    font-size: 28px;
    font-family: ${Fonts.type.bold};
    font-weight: 700;
    color: white;
    text-align: center;
`;

const CoverImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export default MainPlayer;
