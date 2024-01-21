import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import normalize from '../../utility/normalize'
import color from '../../config/color'

type Props = {
    title: string,
    onPress: () => void,
    loader?: boolean
}

const ButtonCustom = ({
    title,
    onPress,
    loader
}: Props) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.outer}>
      {
          loader ? <View>
              <ActivityIndicator color={color.WHITE}/>
          </View> : 
           <Text style={styles.title}>{
            title
    }</Text>
      }
     
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    title:{
        fontSize:normalize(16),
        color:color.WHITE,
        fontWeight:'500',
        fontFamily:'Lexend'
    },
    outer:{
        marginTop:normalize(37),
borderRadius:normalize(60),
backgroundColor:color.BLUE_BUTTON,
justifyContent:'center',
alignItems:'center',
height:normalize(54),

}
})