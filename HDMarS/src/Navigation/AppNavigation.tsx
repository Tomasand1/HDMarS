import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../LaunchScreen';
import Main from '../Containers/Main';

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
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
