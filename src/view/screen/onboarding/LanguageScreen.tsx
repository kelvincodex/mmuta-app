import {Animated, Image, ImageBackground, Text} from "react-native";
import View = Animated.View;
import {indexStyle} from "@/assets/style/Index";
import {BaseButton} from "@/component/button/BaseButton";
import {LanguageContent} from "@/component/content/LanguageContent";

export const LanguageScreen = () => {
  return(
    <View style={indexStyle.baseContainer}>
        <ImageBackground style={indexStyle.language_curveTop} source={require('@/assets/image/languageTopCurve.png')}  resizeMode={'cover'}>
            <Image style={indexStyle.language_logo} source={require('@/assets/image/logo.png')} resizeMode={'cover'} />
        </ImageBackground>
       <LanguageContent />
    </View>
  )
}