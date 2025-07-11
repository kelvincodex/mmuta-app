import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {HomeHeaderContainer} from "@/component/container/HomeHeaderContainer";
import {Image, View} from "react-native";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";
import {SearchInput} from "@/component/input/SearchInput";
import {HomeContent} from "@/component/content/HomeContent";
import {RateUsModal} from "@/component/modal/RateUsModal";
import {LearnToEarnModal} from "@/component/modal/LearnToEarnModal";
import {StatusBar} from "expo-status-bar";
import {RegisterPopUpLayout} from "@/view/layout/RegisterPopUpLayout";

export const HomeScreen = () => {
    const {setOptions} = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerShown: true,
            header: () =>  <HomeHeaderContainer />

        })
    }, []);
  return(
      <View style={{flex: 1, paddingTop: 20}}>
          <RegisterPopUpLayout />
          <StatusBar hidden={false} backgroundColor={'transparent'} style={'light'} translucent={true} />
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <HomeContent />
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}