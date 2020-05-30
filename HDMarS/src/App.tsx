/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Metrics from './Theme/Global/Metrics';

declare const global: {HermesInternal: null | {}};

//TODO: remove me
console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MainView>
          <ImageTouchable>
            <CustomImage
              source={require('../assets/images/23_Arabia_Dunes.jpg')}
            />
          </ImageTouchable>
        </MainView>
      </SafeAreaView>
    </>
  );
};

const MainView = styled.View`
  width: ${Metrics.screenWidth}px;
  height: ${Metrics.screenHeight}px;;
  align-items: center;
  justify-content: center;
`;

const ImageTouchable = styled.TouchableOpacity`
  width: ${Metrics.images.xxl}px;
  height: ${Metrics.images.xxl}px;
`;

const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default App;
