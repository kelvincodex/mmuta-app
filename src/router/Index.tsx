import { NavigationContainer} from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import {Fonts} from "@/app/plugins/Fonts";
import {useCallback} from "react";
import {RenderNavigation} from "@/router/__render";
export const RouteContainerProvider = () => {
    const [fontsLoad] = useFonts(Fonts)

    const onLayoutRootView = useCallback(async ()=>{
        if (fontsLoad){
            await SplashScreen.hideAsync()
        }
    }, [fontsLoad])

    if (!fontsLoad){
        return  null
    }

  return (
      <NavigationContainer onReady={onLayoutRootView}>
            <RenderNavigation />
      </NavigationContainer>
  )
}