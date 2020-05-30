import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, SafeAreaView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Metrics from './Theme/Global/Metrics';
import Colors from './Theme/Global/Colors';
import ImageTouchable from './Components/ImageTouchable';
import { topMessage } from './Components/Global/TopMessage';
import { post } from './Functions/router';
// import AppNavigation from '../Navigation/AppNavigation';

const RootContainer = () => {
    const postImage = async (image: any) => {
        topMessage('Pressed');
        post(image);
    };

    return (
        <ApplicationView>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
            />
            <SafeAreaView>
                <MainView>
                    <ImageTouchable
                        onPress={postImage}
                        source={require('../assets/images/23_Arabia_Dunes.jpg')}
                    />
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
