import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import types from './types';
import Login from '../screens/authentication/Login';
import Signup from '../screens/authentication/Signup';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
    const initialScreenName = types.login.route;
    return (
        <Stack.Navigator initialRouteName={initialScreenName}>
            <Stack.Screen name={types.login.route} component={Login} options={{ headerShown: false, title: types.login.title }} />
            <Stack.Screen name={types.signup.route} component={Signup} options={{ headerShown: false, title: types.signup.title }} />
        </Stack.Navigator>
    );

}


export default AuthNavigation;