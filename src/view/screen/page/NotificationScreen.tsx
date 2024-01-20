import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ScrollView, Text, View} from "react-native";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {NotificationContent} from "@/component/content/NotificationContent";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg"

export const NotificationScreen = () => {
    const {setOptions} = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerShown: true,
            header: () =>  <TabHeaderContainer title={'Notifications'} />

        })
    }, []);
  return(
      <View style={{flex: 1, paddingTop: 20}}>
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />
          <ScrollView
              contentContainerStyle={{paddingHorizontal: 30}}
          >
              <NotificationContent />
          </ScrollView>
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}