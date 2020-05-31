import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import Metrics from '../Theme/Global/Metrics';
import LoadingIndicator from '../Components/LoadingIndicator';

const LoadingIndicator = () => {
    return (
        <SafeAreaView>
            <MainView>
                <LoadingIndicator />
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

export default LoadingIndicator;
