import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import color from '../../config/color'
import SMS from '../../assets/icons/sms'
import USER from '../../assets/icons/user'
import LOCK from '../../assets/icons/lock'
import DESIGN from '../../assets/icons/Design'

import I18n from '../../utility/plugin/I18n'
import HeaderSection from '../../components/auth/HeaderSection'
import normalize, { SCREEN_WIDTH } from '../../utility/normalize'
import SocialAuth from '../../components/auth/SocialAuth'
import ButtonCustom from '../../components/auth/ButtonCustom'
import types from '../../navigation/types'
import CheckBox from '../../components/auth/CheckBox'
import { SignAPI } from '../../services/auth/signUpApi'
import { useMutation } from 'react-query'
import { SetAuthInfo } from '../../store/reducersHandlers'
import { useDispatch } from 'react-redux'

const Signup = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState({ value: '', error: '' })
  const [email, setEmail] = React.useState({ value: 'eve.holt@reqres.in', error: '' })
  const [password, setPassword] = React.useState({ value: 'cityslicka', error: '' })
  const [loader, setLoader] = React.useState(false)

  const [agree, setAgree] = React.useState(false)
  const [allowNotification, setAllowNotification] = React.useState(false)


  const mutationSignup = useMutation({
    mutationFn: (cred) => {
      return SignAPI(cred);
    },
    onSuccess: (response) => {
      console.log(response, "response on onsuccess");
        setLoader(false)
        if(Object(response).hasOwnProperty('error')){
            setPassword({ ...password, error: response.error })
        }
        if(Object(response).hasOwnProperty('token')){
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


  const submitHandler = () => {

    setLoader(true)
  
    console.log(password.value, "password value");
    // validate password with regex minumum 8 characters, atleast one uppercase, atleast one lowercase, atleast one number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (name.value!= '' && email.value != '' && password.value != '') {
      if(name.value==''){
        setName({ ...name, error: I18n.t('auth.register.ENTERNAME') })
        setLoader(false)
        return
      }
      if (!email.value.includes('@')) {
        setEmail({ ...email, error: I18n.t('auth.login.emailError') })
        setLoader(false)
        return
      }
      else if (!passwordRegex.test(password.value)) {
        setPassword({ ...password, error: I18n.t('auth.register.PASSWORDERROR') })
        setLoader(false)
        return
      }

    }
    else {
      if(name.value==''){
        setName({ ...name, error: I18n.t('auth.register.ENTERNAME') })
        setLoader(false)
        return
      }
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


    mutationSignup.mutate({
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
        title={I18n.t('auth.register.title')}
        description={I18n.t('auth.register.description')}
      />
      <View style={styles.body}>
        <View>

          <View style={styles.input}>

            <USER />
            <TextInput
              style={styles.inputText}
              maxLength={32}
              value={name.value}
              onChangeText={(text) => setName({ value: text, error: '' })}
              placeholder={I18n.t('auth.register.ENTERNAME')}
              placeholderTextColor={'rgba(0,0,0,0.3)'} 
            ></TextInput> 
          </View>
          {
            name.error ?
              <Text style={styles.errorAlert}>{name.error}</Text>
              : null
          }
        </View>
        <View>

          <View style={{...styles.input,marginTop:normalize(24)}}>

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
              maxLength={264}
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
        title={I18n.t('auth.register.TNC')}
        onPress={()=>setAgree(!agree)}
        checked={agree}
        />
        <View style={{marginTop:normalize(14)}}></View>
          <CheckBox
        title={I18n.t('auth.register.ALLOWNOTIFICATION')}
        onPress={()=>setAllowNotification(!allowNotification)}
        checked={allowNotification}
        />
          </View>
        </View>
      </View>
      <View style={styles.footer}>

         
        <ButtonCustom
          title={I18n.t('auth.login.proceed')}
          onPress={submitHandler}
          loader={loader}

        />
      </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  // style for foorter text with sign up button in the text   
  design:{
    position:"absolute",
    top:normalize(0),
    left:normalize(0),
  },
  footer: {
    position: 'absolute',
    bottom: normalize(40),
    marginHorizontal: normalize(16),
    width: SCREEN_WIDTH - normalize(32),
  },
  input: {
    borderRadius: normalize(12),
    backgroundColor: color.GREY,
    height: normalize(58),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    fontFamily:"Lexend",

  },
  bodyFooter: {
    marginTop: normalize(16),
    flexDirection: 'column',
alignItems:"flex-start"
  },
  text: {
    fontSize: normalize(12),
    fontWeight: "500",
    fontFamily:"Lexend",

    color: color.BLUE_THEME_TEXT
  },
  text1: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: color.BLUE_THEME_TEXT,
    fontFamily:"Lexend",

  },


  errorAlert: {
    color: color.RED,
    fontSize: normalize(14),
    fontWeight: "500",
    marginTop: normalize(16),
    fontFamily:"Lexend",

  },
  inputText: {
    flex: 1,
    fontSize: normalize(14),
    fontWeight: "500",
    paddingHorizontal: normalize(16),
    color: color.BLACK_TEXT,
    fontFamily:"Lexend",


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