import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../LaunchScreen';
import LoadingScreen from '../Containers/LoadingScreen';
import Main from '../Containers/Main';
import MainPlayer from '../Containers/MainPlayer';

const AppStack = createStackNavigator();

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255, 255, 255)',
    },
};

const AppNavigation = (): JSX.Element => {
    return (
        <NavigationContainer theme={AppTheme}>
            <AppStack.Navigator
                headerMode="none"
                initialRouteName="LaunchScreen">
                <AppStack.Screen name="LaunchScreen" component={LaunchScreen} />
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen
                    name="LoadingScreen"
                    component={LoadingScreen}
                />
                <AppStack.Screen name="MainPlayer" component={MainPlayer} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
