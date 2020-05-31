import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { topMessage } from '../Components/Global/TopMessage';
import SoundPlayer from 'react-native-sound-player';
import colors from '../Themes/Colors';
import { Fonts, Metrics, Colors } from '../Themes';
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

    const [timer, setTimer] = useState(0);

    const [linePos, setLinePos] = useState(0);

    const [adder, setAdder] = useState(0);

    useEffect(() => {
        const url = route.params.image[0];
        setImageURL(url);
        setDescription(route.params.image[3]);
        setTitle(route.params.image[1]);
        setDate(route.params.image[2]);
        handleTimer();
        console.log('USE EFFECT TRIGGERED');
    }, []);

    const setInit = async () => {
        const url = route.params.image[0];
        setImageURL(url);
        handleTimer();
        setLinePos(0);
        setIsPlaying(false);
        setPlayed(false);
        SoundPlayer.pause();
        SoundPlayer.seek(0);
        console.log('SET INIT');
    };

    const handleTimer = () => {
        let timeriux = 0;
        if (route.params.time == 'One Minute') {
            timeriux = 1 * 60;
            setTimer(timeriux);
        } else if (route.params.time == 'Five Minutes') {
            timeriux = 5 * 60;
            setTimer(timeriux);
        } else {
            timeriux = 7 * 60;
            setTimer(timeriux);
        }
        setAdder(Metrics.screenWidth / 1.1 / timeriux);
    };

    const handleSeconds = () => {
        console.log('handle secs called');
        if (isPlaying) {
            console.log('changing seconds');
            if (timer <= 0) {
                setIsPlaying(false);
                stopFile();
            } else {
                setTimer(timer - 1);
                setLinePos(linePos + adder);
                console.log('ODNA SECUNDA');
            }
        }
    };

    const handlePlay = () => {
        console.log('HANDLE PLAY');

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
                console.log('PLAY FILE !PLAYED');

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

    useEffect(() => {
        const interval = setInterval(() => {
            handleSeconds();
            console.log('This will run every second!, linePos');
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, linePos, isPlaying]);

    return (
        <SafeAreaView>
            <MainView>
                <CoverTouchable
                    disabled={timer === 0}
                    activeOpacity={0.9}
                    onPress={handlePlay}>
                    <VertLine style={{ left: linePos }} />
                    <CoverImage
                        source={{
                            uri: imageURL,
                        }}
                    />
                </CoverTouchable>
                <DescriptionView>
                    <Title1>{title}</Title1>
                    <Caption>{date}</Caption>
                    <DescriptionScroll showsVerticalScrollIndicator={false}>
                        <Description>{description}</Description>
                    </DescriptionScroll>
                </DescriptionView>
                <ButtonsView>
                    <ChoiceText
                        onPress={() =>
                            props.navigation.navigate('LaunchScreen')
                        }>
                        Back
                    </ChoiceText>
                    <PlayButton
                        disabled={timer === 0}
                        activeOpacity={0.7}
                        onPress={handlePlay}>
                        <PlayText>
                            {timer == 0
                                ? 'Finished'
                                : isPlaying
                                ? loading
                                    ? 'Loading...'
                                    : 'Pause'
                                : played
                                ? 'Resume '
                                : 'Play'}
                        </PlayText>
                        {timer !== 0 && <PlayText time>{timer}s</PlayText>}
                    </PlayButton>
                    <ChoiceText onPress={setInit}>Restart</ChoiceText>
                </ButtonsView>
            </MainView>
        </SafeAreaView>
    );
};

const ButtonsView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

const ChoiceText = styled.Text`
    font-size: 15px;
    font-family: ${Fonts.type.medium};
    color: ${colors.tintColor};
    text-align: center;
    width: 80px;
`;

const VertLine = styled.View`
    width: 5px;
    height: 350px;
    background-color: ${Colors.white};
    position: absolute;
    z-index: 1;
`;

const DescriptionScroll = styled.ScrollView`
    width: 90%;
`;

const MainView = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`;

const CoverTouchable = styled.TouchableOpacity`
    margin-top: 20px;
    width: ${Metrics.screenWidth / 1.1}px;
    height: 350px;
`;

const DescriptionView = styled.View`
    padding-top: 10px;
    align-items: center;
    justify-content: flex-start;
    font-family: ${Fonts.type.light};
    flex: 1;
    width: 100%;
`;

const Description = styled.Text`
    color: ${colors.darkGray};
    text-align: center;
    font-size: 16px;
    padding-top: 15px;
`;

const PlayButton = styled.TouchableOpacity`
    width: 130px;
    height: 130px;
    border-radius: 200px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    border-width: 2px;
    border-color: ${colors.tintColor};
`;

interface PlayInterface {
    time?: boolean;
}

const PlayText = styled.Text<PlayInterface>`
    font-size: 28px;
    font-family: ${Fonts.type.bold};
    font-weight: 700;
    color: ${colors.tintColor};
    text-align: center;
    ${(props) => props.time && `font-size: 18px;`}
`;

const CoverImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 3px;
`;

export default MainPlayer;
