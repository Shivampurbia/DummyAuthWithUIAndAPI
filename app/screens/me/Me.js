import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DESIGN from '../../assets/icons/Design'
import Profile from '../../components/Me/Profile'
import PROFILEHOME from '../../assets/icons/ProfileHome.svg'
import SHIELD from '../../assets/icons/Shield.svg'
import PEOPLE from '../../assets/icons/People.svg'
import DESIGN2 from '../../assets/icons/DESIGN2.svg'
import DESIGN3 from '../../assets/icons/Design3.svg'
import normalize from '../../utility/normalize'
import I18n from '../../utility/plugin/I18n'
import color from '../../config/color'
import ARROW from '../../assets/icons/Arrow.svg'
import { logoutHandlerFunction } from '../../store/reducersHandlers'
import { useDispatch } from 'react-redux'
const Me = () => {

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.DESIGN1}>
        <DESIGN3 />
        </View>
      <Profile
        name="Miriam de Jesus"
        email="h.mariana@gmail.com"
        picture='../assets/icons/Dummy.png'
      />
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <View style={styles.DESIGN}>
            <DESIGN2 />
          </View>
          <View style={styles.menuItemInner}>
            <PROFILEHOME />
            <Text style={styles.itemTitle}>
              {
                I18n.t('me.ACCOUNT')
              }
            </Text>
          </View>
          <ARROW />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuItemInner}>
              <SHIELD />
            <Text style={styles.itemTitle}>
              {
                I18n.t('me.GOOGLE')
              }
            </Text>
          </View>
          <ARROW />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuItemInner}>
              <PEOPLE />
            <Text style={styles.itemTitle}>
              {
                I18n.t('me.TEAMS')
}
            </Text>
          </View>
          <ARROW />
        </View>

        <Pressable 
        onPress={()=>{
          console.log("logout pressed");
          dispatch(logoutHandlerFunction())
        
        }}
        style={{...styles.menuItem,...styles.logout}}>
          <View>
            <Text style={{...styles.itemTitle,...styles.logoutText}}>
              {
                I18n.t('me.LOGOUT')
}
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Me

const styles = StyleSheet.create({
  logoutText:{
    marginLeft:0,color:color.WHITE,fontWeight:"700"
  },
  logout:{
    justifyContent:"center",backgroundColor:color.BLUE_BUTTON
  },
  DESIGN:{
      position: 'absolute',
      left: normalize(0),
      top: normalize(0),

  },
  DESIGN1:{
    position: 'absolute',
    right: normalize(0),
    bottom: normalize(20),

},
  menu:{
    marginTop: normalize(54), marginHorizontal: normalize(16), justifyContent: 'center', alignItems: 'center',
  },
  itemTitle: {
    fontSize: normalize(16),
    fontWeight: "400",
    fontFamily: "Lexend",
    marginLeft: normalize(16),
    color: color.BKACK_TEXT
  },
  menuItem: {
    width: normalize(343),
    height: normalize(58),
    borderRadius: normalize(12),
    borderColor: color.GREY_LINE,
    borderWidth: normalize(1.4),
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: normalize(18),
    justifyContent: "space-between",
    marginBottom:normalize(20)

  },
  menuItemInner: {
    flexDirection: 'row',
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})