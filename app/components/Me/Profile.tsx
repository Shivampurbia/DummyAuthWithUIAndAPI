import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../utility/normalize'
import  Dunmmy from '../../assets/icons/Dummy.png'
import CAMERA from '../../assets/icons/Camera.svg'
import color from '../../config/color'
type Props = {
    picture: string,
    name: string,
    email: string,
}

const Profile = ({
    picture,
    name,
    email,
}: Props) => {
  return (
   <View style={styles.container}>
    <View>

            <Image
            style={styles.imageStyle}
            source={Dunmmy} />
            <TouchableOpacity style={{position: 'absolute', 
            borderRadius: normalize(19),
            justifyContent: 'center',
            alignItems: 'center',
            height: normalize(38), width: normalize(38),
            bottom: normalize(0), right: normalize(-8),backgroundColor:color.BLUE_BUTTON}}>
            <CAMERA  />
            </TouchableOpacity>
    </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
   </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(33),
    
    },
    imageStyle: {
        width: normalize(105),
        height: normalize(105),
        borderRadius: normalize(55),
        borderWidth: normalize(7),
        borderColor: '#F0F7FF',
    },
    name:{
        marginTop: normalize(8),
        marginBottom: normalize(6),
        color: color.BKACK_TEXT,
        fontSize: normalize(18),
        fontWeight: '500',
        fontFamily: 'Lexend',
    },
    email:{
        color: color.LIGHT_GREY,
        textAlign: 'center',
        fontFamily: 'Lexend',
        fontSize: normalize(14),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: normalize(20),
    }
    
})