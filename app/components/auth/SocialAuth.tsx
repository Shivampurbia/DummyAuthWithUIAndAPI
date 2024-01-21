import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import FACEBOOK from '../../assets/icons/Facebook'
import APPLE from '../../assets/icons/Apple'
import GOOGLE from '../../assets/icons/Google'
import normalize from '../../utility/normalize';
import color from '../../config/color';
type Props = {}

const SocialAuth = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.threeiconrow}>
                <View style={styles.outer}>
                    <FACEBOOK />
                </View>
                <View style={styles.outer}>
                    <APPLE />
                </View>
                <View style={styles.outer}>
                    <GOOGLE />
                </View>
            </View>

            {/* seperator line with Or text in the middle */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: normalize(24),marginHorizontal:normalize(16) }}>
                <View style={{ flex: 1, height:normalize(1), backgroundColor: color.GREY_LINE }} />
                <View>
                    <Text style={styles.orText}>Or</Text>
                </View>
                <View style={{ flex: 1, height:normalize(1), backgroundColor: color.GREY_LINE }} />
        </View>
        </View>
    )
}

export default SocialAuth

const styles = StyleSheet.create({
    orText:{width:normalize(32), fontSize:normalize(12), textAlign: 'center', color: color.BLUE_THEME_TEXT,fontWeight:"400",
    fontFamily:"Lexend",

 },
    outer: {
        width: normalize(50),
        height: normalize(50),
        borderRadius: normalize(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(12),
        backgroundColor: color.WHITE,
        shadowColor: color.LIGHT_GREY,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 14,
        elevation: 4,

    },
    threeiconrow:{
flexDirection:'row',
justifyContent:'space-between',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})