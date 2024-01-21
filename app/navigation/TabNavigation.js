import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import types from './types';
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Me from '../screens/me/Me';
import Chat from '../screens/chat/Chat';
import Verification from '../screens/verification/Verification';
import Analytics from '../screens/analytics/Analytics';
import CHATTAB from '../assets/icons/ChatTab.svg';
import PROFILE from '../assets/icons/Profile.svg';
import TICKCIRCLE from '../assets/icons/TickCircle.svg';
import EXTERNALDRIVE from '../assets/icons/Externaldrive.svg';
import GRAPH from '../assets/icons/Graph.svg';
import normalize from '../utility/normalize';
import color from '../config/color';
import { StyleSheet, View } from 'react-native';

const TabBarOptions = {
    tabBarActiveBackgroundColor: "#ffffff",
    tabBarInactiveBackgroundColor: "#ffffff",
    tabBarActiveTintColor: "#000000",
    tabBarLabelStyle: {
        display: "none"
    },
    headerShown: false,
    
    style: {
        position: 'absolute',
    },
    safeAreaInsets: {
        bottom: 'always', top: 'never'
    },
    
    tabBarStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 12.84,
        elevation: 1,

        height: normalize(90),
        paddingBottom: normalize(24),
        paddingTop: Platform.OS == 'ios' ? normalize(8) : normalize(14),
        backgroundColor: color.WHITE,
        
    }
}
const TabNavigation = () => {
    const MainStack = createNativeStackNavigator();
    const initialScreenName = types.home.route;
    return (
        <MainStack.Navigator
       
        initialRouteName={initialScreenName}>
            <MainStack.Screen name={types.hometabBottom.route} options={{headerShown:false}} component={BottomTabNavigator} />
        </MainStack.Navigator>
    );

}

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (<Tab.Navigator
        initialRouteName={types.metabBottom.route}
        screenOptions={TabBarOptions}>
        <Tab.Screen name={types.hometab.route} component={HomeTab} unmountOnBlur={false}
            options={{headerShown:false,
                

                tabBarIcon: ({ focused }) => {
                    return focused ? <View 
                    pointerEvents='none'
                    style={{alignItems: "center",...styles.focused }}>
                        <GRAPH />
                    </View>
                        :
                        <View 
                    pointerEvents='none'
                        style={{
                            alignItems: "center"
                        }}>
                            <GRAPH />
                        </View>
                }
            }} />

        <Tab.Screen name={types.analyticstabBottom.route} component={AnalyticsTab} unmountOnBlur={false}
            options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    return focused ?
                        <View 
                    pointerEvents='none'
                    style={{alignItems: "center",...styles.focused }}>

                            <EXTERNALDRIVE />
                        </View> :
                        <View 
                        pointerEvents='none'
                        style={{
                            alignItems: "center"
                        }}>
                            <EXTERNALDRIVE />
                        </View>
                }
            }} />

        <Tab.Screen name={types.metabBottom.route} component={MeTab} unmountOnBlur={false}
            options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    return focused ?
                        <View 
                        pointerEvents='none'
                        style={{alignItems: "center",...styles.focused }}>

                            <PROFILE />
                        </View> :
                        <View style={{
                            alignItems: "center"
                        }}>
                            <PROFILE />
                        </View>
                }
            }} />

        <Tab.Screen name={types.chattabBottom.route} component={ChatTab} unmountOnBlur={false}
            options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    return focused ?
                        <View 
                        pointerEvents='none'
                        style={{alignItems: "center",...styles.focused }}>
                            <CHATTAB />
                        </View>
                        :
                        <View 
                        pointerEvents='none'
                        style={{
                            alignItems: "center"
                        }}>
                            <CHATTAB />
                        </View>
                }
            }} />

        <Tab.Screen name={types.verificationtabBottom.route} component={VerificationTab} unmountOnBlur={false}
            options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    return focused ?
                        <View 
                        pointerEvents='none'
                        style={{alignItems: "center",...styles.focused }}>
                            <TICKCIRCLE />
                        </View>
                        :
                        <View 
                        pointerEvents='none'
                        style={{
                            alignItems: "center"
                        }}>
                            <TICKCIRCLE />
                        </View>
                }
            }} />
    </Tab.Navigator>);
}


const HomeTab = () => {
    let Stack = createNativeStackNavigator();
    return (<Stack.Navigator initialRouteName={types.home.route}>
            <Stack.Screen name={types.home.route} component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>)
}

const AnalyticsTab = () => {
    let Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={types.analytics.route}>
            <Stack.Screen name={types.analytics.route} component={Analytics} options={{headerShown:false}}/>  
        </Stack.Navigator>
    )
}

const MeTab = () => {
    let Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={types.me.route}>
            <Stack.Screen name={types.me.route} component={Me} 
            options={{
                headerShown:false
            }}
            />  
        </Stack.Navigator>
    )
}

const ChatTab = () => {
    let Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={types.chat.route}>
            <Stack.Screen name={types.chat.route} component={Chat} options={{headerShown:false}} />    
        </Stack.Navigator>
    )
}

const VerificationTab = () => {
    let Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={types.verification.route}>
            <Stack.Screen name={types.verification.route} component={Verification} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}





export default TabNavigation;

const styles = StyleSheet.create({
    focused:{
        backgroundColor: color.BLUE_BUTTON,
        height: normalize(52),
        width: normalize(52),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: normalize(26),
    }
})
