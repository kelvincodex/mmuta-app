import {ImageBackground} from "react-native";
import {StatusBar} from "expo-status-bar";
import {indexStyle} from "@/assets/style/Index";
import {useEffect} from "react";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import Animated, {StretchInX, ZoomIn} from "react-native-reanimated";

export const StartupScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        if (navigation.isFocused()){
            const timeout = setTimeout(()=>{
                RouteHelperUtil.navigate(navigation, RouterConstantUtil.onboarding.language)
            }, 3000)

            return ()=> clearTimeout(timeout)
        }

    }, [])
  return (
      <Animated.View style={indexStyle.flex}  entering={StretchInX.duration(500)}>
          <ImageBackground source={require('@/assets/image/startup.png')} style={indexStyle.flex} resizeMethod={"scale"} resizeMode={'cover'} >
              <StatusBar hidden={true} />
          </ImageBackground>
      </Animated.View>
  )
}

