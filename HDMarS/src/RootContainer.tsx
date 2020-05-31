import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Colors from './Theme/Global/Colors';
import AppNavigation from './Navigation/AppNavigation';

const RootContainer = () => {
    return (
        <ApplicationView>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
            />
            <AppNavigation />
            <FlashMessage position="top" />
        </ApplicationView>
    );
};

const ApplicationView = styled.View`
    flex: 1;
    background-color: ${Colors.assetColors.white};
`;

export default RootContainer;
