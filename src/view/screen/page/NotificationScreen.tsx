import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ScrollView, View} from "react-native";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {NotificationContent} from "@/component/content/NotificationContent";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg"
import {SearchInput} from "@/component/input/SearchInput";

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
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <NotificationContent />
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}