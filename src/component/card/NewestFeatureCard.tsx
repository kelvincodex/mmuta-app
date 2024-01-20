import {Image, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import Cancel  from "@/assets/icon/cancel.svg"
import {BaseButton} from "@/component/button/BaseButton";

export const NewestFeatureCard = () => {
  return(
      <View style={styles.container}>
        <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Newest feature</Text>
        </View>
        <Cancel style={{transform: [{translateY: -25}, {translateX: 310}]}} />
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 30}}>
            <View>
                <Text style={styles.text}>Learn and Earn {"\n"} Real Cash</Text>

                <BaseButton type={'normal'} textStyle={{color: ThemeConstantUtil.COLOR.neutral["75"], fontSize: 16}} containerStyle={{width: 138, height: 38, marginTop: 40, backgroundColor: ThemeConstantUtil.COLOR.neutral["25"]}} title={'Start'} />
            </View>
            <Image source={require('@/assets/image/newestFeature.png')}  />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        height: 200,
        borderRadius: 10,
        borderColor: "hsla(0, 0%, 93%, 1)",
        elevation: 0,
        backgroundColor: ThemeConstantUtil.COLOR.white
    },
    tagContainer:{
        height: 36,
        width: 153,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: ThemeConstantUtil.COLOR.accent["75"],
        justifyContent:"center",
        alignItems:"center",
    },
    tagText:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 14,
        lineHeight: 17,
        color: ThemeConstantUtil.COLOR.white
    },
    text:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 17,
        lineHeight: 20,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    }
})