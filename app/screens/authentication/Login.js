import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import color from '../../config/color'
import SMS from '../../assets/icons/sms'
import LOCK from '../../assets/icons/lock'
import DESIGN from '../../assets/icons/Design'

import I18n from '../../utility/plugin/I18n'
import HeaderSection from '../../components/auth/HeaderSection'
import normalize, { SCREEN_WIDTH } from '../../utility/normalize'
import SocialAuth from '../../components/auth/SocialAuth'
import ButtonCustom from '../../components/auth/ButtonCustom'
import types from '../../navigation/types'
import CheckBox from '../../components/auth/CheckBox'
import { useMutation } from 'react-query'
import { LoginAPI } from '../../services/auth/loginApi'
import { useDispatch } from 'react-redux'
import { setAuthInfo } from '../../store/data.store'
import { SetAuthInfo } from '../../store/reducersHandlers'

const Login = ({ route, navigation }) => {
    const [email, setEmail] = React.useState({ value: 'eve.holt@reqres.in', error: '' })
    const [password, setPassword] = React.useState({ value: 'cityslicka', error: '' })
    const [rememberMe, setRememberMe] = React.useState(false)
    const [loader, setLoader] = React.useState(false)
    const dispatch = useDispatch();

    const mutationLogin = useMutation({
        mutationFn: (cred) => {
            return LoginAPI(cred);
        },
        onSuccess: (response) => {
            console.log(response, "response on onsuccess on login api");
            setLoader(false)
            if (Object(response).hasOwnProperty('error')) {
                setPassword({ ...password, error: response.error })
            }
            if (Object(response).hasOwnProperty('token')) {
                dispatch(SetAuthInfo({
                    isLogin: true,
                    token: response.token,
                }));
            }
        },
        onError: (error) => {
            setLoader(false)
            setPassword({ ...password, error: I18n.t('auth.register.SOMETHINGWRONG') })

            console.log(error, "error on onerror");
        },
    })

    const submitHandler = async () => {
        console.log('handle submit called');
        console.log('email', email);
        console.log('password', password);

        setLoader(true)
        if (email.value != '' && password.value != '') {
            if (!email.value.includes('@')) {
                setEmail({ ...email, error: I18n.t('auth.login.emailError') })
                setLoader(false)
                return
            }
        }
        else {
            if (email.value == '') {
                setEmail({ ...email, error: I18n.t('auth.login.emailError') })
                setLoader(false)
                return
            }
            if (password.value == '') {
                setPassword({ ...password, error: I18n.t('auth.login.passwordError') })
                setLoader(false)
                return
            }
        }


        mutationLogin.mutate({
            email: email.value,
            password: password.value,
        })

    }
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.design}>
                <DESIGN />
            </View>
            <HeaderSection
                title={I18n.t('auth.login.title')}
                description={I18n.t('auth.login.Description')}
            />
            <View style={styles.body}>
                <View>

                    <View style={styles.input}>

                        <SMS />
                        <TextInput
                            style={styles.inputText}
                            maxLength={264}
                            value={email.value}
                            onChangeText={(text) => setEmail({ value: text, error: '' })}
                            placeholder={I18n.t('auth.login.email')}
                            keyboardType='email-address'
                            placeholderTextColor={'rgba(0,0,0,0.3)'}
                        ></TextInput>
                    </View>
                    {
                        email.error ?
                            <Text style={styles.errorAlert}>{email.error}</Text>
                            : null
                    }
                </View>
                <View>

                    <View style={{ ...styles.input, marginTop: normalize(24) }}>
                        <LOCK />
                        <TextInput
                            style={styles.inputText}
                            maxLength={12}
                            value={password.value}
                            onChangeText={(text) => setPassword({ value: text, error: '' })}
                            placeholder={I18n.t('auth.login.password')}
                            secureTextEntry
                            placeholderTextColor={'rgba(0,0,0,0.3)'}
                        ></TextInput>

                    </View>
                    {
                        password.error ?
                            <Text style={styles.errorAlert}>{password.error}</Text>
                            : null
                    }
                    <View style={styles.bodyFooter}>
                        <CheckBox
                            title={I18n.t('auth.login.rememberMe')}
                            checked={rememberMe}
                            onPress={() => setRememberMe(!rememberMe)}
                        ></CheckBox>
                        <Text style={styles.text}>{I18n.t('auth.login.forgotPassword')}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <SocialAuth />

                <View style={{ marginTop: normalize(40), flexDirection: "row", alignSelf: "center" }}>
                    <Text style={{ ...styles.text1, alignSelf: "center", color: color.BKACK_TEXT }}>{I18n.t('auth.login.NOACCOUNT')}</Text>
                    <Pressable
                        hitSlop={normalize(10)}
                        onPress={() => {
                            navigation.navigate(types.signup.route)
                            console.log("hello")
                        }}
                    >

                        <Text style={{ ...styles.text1, alignSelf: "center", color: color.BLUE_THEME_TEXT }}>{" " + I18n.t('auth.login.SIGNUP')}</Text>
                    </Pressable>
                </View>

            </View>
            <View style={styles.fixedButton}>
                <ButtonCustom
                    title={I18n.t('auth.login.proceed')}
                    loader={loader}
                    onPress={submitHandler}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    design: {
        position: 'absolute',
        top: normalize(0),
        left: normalize(0),

    },
    fixedButton:
    {
        position: 'absolute',
        bottom: normalize(40),
        marginHorizontal: normalize(16),
        width: SCREEN_WIDTH - normalize(32),
    }
    ,
    styleCheck: {
        height: normalize(19), width: normalize(19), backgroundColor: color.GREY_LINE,
        borderRadius: normalize(4)
    },
    footer: {
        marginTop: normalize(59),
        marginHorizontal: normalize(16),
    },
    input: {
        borderRadius: normalize(12),
        backgroundColor: color.GREY,
        height: normalize(58),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: normalize(16),
        fontFamily: "Lexend"

    },
    bodyFooter: {
        marginTop: normalize(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: normalize(12),
        fontWeight: "500",
        fontFamily: "Lexend",

        color: color.BLUE_THEME_TEXT
    },
    text1: {
        fontSize: normalize(14),
        fontWeight: "500",
        color: color.BLUE_THEME_TEXT,
        fontFamily: "Lexend"

    },


    errorAlert: {
        color: color.RED,
        fontSize: normalize(14),
        fontWeight: "500",
        marginTop: normalize(16),
        fontFamily: "Lexend"

    },
    inputText: {
        flex: 1,
        fontSize: normalize(14),
        fontWeight: "500",
        paddingHorizontal: normalize(16),
        color: color.BLACK_TEXT,
        fontFamily: "Lexend"


    },
    body: {
        paddingHorizontal: normalize(16),
        marginTop: normalize(44)
    },
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    }
})