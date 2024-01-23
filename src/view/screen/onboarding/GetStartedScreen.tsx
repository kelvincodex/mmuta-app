import {Image, ImageBackground, StyleSheet, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {StatusBar} from "expo-status-bar";
import {BaseButton} from "@/component/button/BaseButton";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import Animated, {LightSpeedInLeft} from "react-native-reanimated";

export const GetStartedScreen = () => {
    const navigation = useNavigation()
    function signup() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.onboarding.feature)
    }
    function signIn() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signIn)
    }
  return (
      <ImageBackground style={[indexStyle.flex, indexStyle.bottom]} source={require('@/assets/image/getStarted.png')} resizeMethod={'scale'} resizeMode={'cover'}>
        <StatusBar hidden={false} style={'light'} />

          <Image style={styles.logo} source={require('@/assets/image/group-logo.png')} resizeMode={'cover'}  />
          <View  style={styles.button}>
              <BaseButton onPress={signup} type={'base'} containerStyle={{backgroundColor: ThemeConstantUtil.COLOR.primary["100"]}}  title={'Sign Up'} />
              <BaseButton onPress={signIn} containerStyle={{borderColor: ThemeConstantUtil.COLOR.white}} textStyle={{color: ThemeConstantUtil.COLOR.white}} title={'Sign In'} />
          </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    logo: {
        transform: [{translateY: -250}]
    },
    button: {
        marginBottom: 50,
        gap: 20
    },

})