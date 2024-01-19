import {ImageBackground} from "react-native";
import {StatusBar} from "expo-status-bar";
import {indexStyle} from "@/assets/style/Index";
import {useEffect} from "react";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";

export const StartupScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        if (!navigation.isFocused()){
            return;
        }
        const timeout = setTimeout(()=>{
            RouteHelperUtil.navigate(navigation, RouterConstantUtil.onboarding.language)
        }, 3000)

        return ()=> clearTimeout(timeout)
    }, [])
  return (
      <ImageBackground source={require('@/assets/image/startup.png')} style={indexStyle.flex} resizeMethod={"scale"} resizeMode={'cover'} >
        <StatusBar hidden={true} />
      </ImageBackground>
  )
}

