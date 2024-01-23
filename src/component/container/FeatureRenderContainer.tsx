import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {FeatureRenderContainerProps} from "@/app/types/component-type";
import Animated, {useAnimatedStyle} from "react-native-reanimated";
import {FeatureData} from "@/app/toolkit/data/FeatureData";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";

export const FeatureRenderContainer =({item, index, flatListIndex}: FeatureRenderContainerProps)=>{
    const navigation = useNavigation()
    const lastStyle = useAnimatedStyle(()=>{
        return {
            display: flatListIndex.value == FeatureData.length - 1 ? 'flex' : 'none'
        }
    })

    const initStyle = useAnimatedStyle(()=>{
        return {
            display: flatListIndex.value !== FeatureData.length - 1 ? 'flex' : 'none'
        }
    })
    
    function skip() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signup)

    }

    return (
        <ImageBackground style={indexStyle.feature_curve} source={item.image} resizeMode={'cover'} resizeMethod={'scale'} >
            <Animated.View style={[indexStyle.justifyBetween, {paddingHorizontal: 30, marginTop: 50}, initStyle]}>
                <Image style={{}} source={require('@/assets/image/round-logo.png')} resizeMethod={'scale'}  resizeMode={'cover'} />
                <Text onPress={skip} style={indexStyle.skip}>SKIP</Text>
            </Animated.View>

            <Animated.View style={[indexStyle.justifyCenter, { marginTop: 120, marginBottom: -50}, lastStyle]}>
                <Image style={{}} source={require('@/assets/image/round-logo.png')} resizeMethod={'scale'}  resizeMode={'cover'} />
            </Animated.View>
            <View style={style.textBox}>
                <Text style={style.topic}>{item.topic}</Text>
                <Text style={style.title}>{item.title}</Text>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    textBox:{
        height: "60%",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 50
    },
    topic:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 27,
        color: ThemeConstantUtil.COLOR.white,
        lineHeight: 32,
        textAlign: "center",
        marginHorizontal: -50
    },
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 20,
        color: ThemeConstantUtil.COLOR.white,
        lineHeight: 24,
        textAlign: "center",
        marginTop: 20
    },
})