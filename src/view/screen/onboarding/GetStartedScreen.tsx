import {ImageBackground, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {StatusBar} from "expo-status-bar";
import {BaseButton} from "@/component/button/BaseButton";

export const GetStartedScreen = () => {
  return (
      <ImageBackground style={[indexStyle.flex, indexStyle.bottom]} source={require('@/assets/image/getStarted.png')} resizeMethod={'scale'} resizeMode={'cover'}>
        <StatusBar hidden={false} style={'light'} />

          <BaseButton title={'Sign Up'} />
          <BaseButton title={'Sign In'} />
      </ImageBackground>
  )
}