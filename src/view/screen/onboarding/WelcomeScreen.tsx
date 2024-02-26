import {Image, ImageBackground, StyleSheet, Text} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {BaseButton} from "@/component/button/BaseButton";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";

export const WelcomeScreen = () => {
    const navigate = useNavigation()
    function home() {
        RouteHelperUtil.navigate(navigate, RouterConstantUtil.tab.home)
    }
  return (
      <ImageBackground source={require('@/assets/image/welcome-bg.png')} resizeMode={'cover'} style={{flex: 1, alignItems:'center'}}>
        <Image source={require('@/assets/image/round-logo-2.png')} resizeMode={'cover'} style={{marginTop: 80}} />
        <Text style={styles.title}>Welcome to {"\n"} Mmuta</Text>
          <Text style={styles.subTitle}>We’re happy to have you {"\n"} here!</Text>
        <Image source={require('@/assets/image/welcomeImg.png')} resizeMode={'cover'}  />
          
          <BaseButton type={'base'} onPress={home} title={'Start Learning'} containerStyle={{marginTop: 80}} />
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratBold,
        fontSize: 34,
        lineHeight: 41,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        textAlign:'center',
        marginVertical: 20
    },
    subTitle:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.glory,
        fontSize: 27,
        lineHeight: 30,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["50"],
        marginVertical: 20
    }
})