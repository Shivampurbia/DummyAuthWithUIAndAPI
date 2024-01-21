import React, { useEffect } from 'react';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';


import { useDispatch, useSelector } from 'react-redux';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/authentication/SplashScreen';
import { GetAuthInfo } from '../store/reducersHandlers';

const MainNavigation = () => {
    const dispatch = useDispatch();
    const { authInfo } = useSelector((state) => state.data);
    const [loading, setLoading] = useState(true);



useEffect(()=>{
    const checkAuthentication = async () => {

        try {
            const authinfo = await dispatch(GetAuthInfo());
            console.log(authinfo, "authinfo on main navigagtion screen");
        } catch (error) {
            
        }
    }

    checkAuthentication()

    setTimeout(() => {
        setLoading(false);
    }, 2000);
},[])


    const SplashScreeen = () => {
        const Stack = createNativeStackNavigator();
        const HeaderOptions = { headerShown: false }
        return (<Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={HeaderOptions} />
        </Stack.Navigator>)
    }


    return (<NavigationContainer>
        {
            loading ?
            <SplashScreeen />
                : authInfo.isLogin ?
                    <TabNavigation />
                    :
                    <AuthNavigation />
        }
    </NavigationContainer>
    );

}

export default MainNavigation;