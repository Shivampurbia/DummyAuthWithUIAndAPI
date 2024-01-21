import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CHECK from '../../assets/icons/check'
import normalize from '../../utility/normalize'
import color from '../../config/color'
import I18n from '../../utility/plugin/I18n'

type Props = {
    checked: boolean,
    title: string,
    onPress: () => void
}

const CheckBox = ({
    onPress,
    checked,
    title
}: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
    {
      checked ?
        <Pressable
          onPress={() => onPress()}
        >
          <CHECK />
        </Pressable>
        :
        <Pressable
          onPress={() => onPress()}
        >
          <View style={styles.styleCheck}>
          </View>
        </Pressable>
    }

    <Text style={{ ...styles.text, color: color.BKACK_TEXT, marginLeft: normalize(8) }}>{title}</Text>
  </View>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    styleCheck: {
        height: normalize(19), width: normalize(19), backgroundColor: color.GREY_LINE,
    
        borderRadius: normalize(4)
      },
      text: {
        fontSize: normalize(12),
        fontWeight: "500",
        color: color.BLUE_THEME_TEXT,
        fontFamily:"Lexend",

      },
})