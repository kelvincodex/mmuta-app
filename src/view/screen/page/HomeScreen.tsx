import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {HomeHeaderContainer} from "@/component/container/HomeHeaderContainer";
import {Image, ScrollView, Text, View} from "react-native";
import {HomeContent} from "@/component/content/HomeContent";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";

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
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />

          <ScrollView
              contentContainerStyle={{paddingHorizontal: 30}}
          >
              <HomeContent />
          </ScrollView>
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}