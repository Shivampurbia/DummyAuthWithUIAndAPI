import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import normalize from '../../utility/normalize'
import color from '../../config/color'
import Logo from '../../assets/icons/Logo.svg'

type Props = {
    title: string,
    description: string
}

const HeaderSection = ({
    title,
    description
}: Props) => {
  return (
    <View style={styles.header}>
    <View style={styles.headerInner}>
        <Logo width={normalize(74)} height={normalize(74)} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
</View>
  )
}

export default HeaderSection

const styles = StyleSheet.create({
    header:{
        marginTop:normalize(24),
        justifyContent:'center',
        alignItems:'center',
    },
    headerInner:{
        justifyContent:'center',
        alignItems:'center',
    },
    description:{
        fontSize:normalize(14),
        color:color.LIGHT_GREY,
        marginTop:normalize(16),
        fontFamily:'Lexend'

    }
    ,
    title:{
        fontSize:normalize(24),
        fontWeight:'bold',
        color:color.BLUE_THEME_TEXT,
        marginTop:normalize(18),
        fontFamily:'Lexend'
    
    },
})

