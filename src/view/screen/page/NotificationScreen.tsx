import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {HomeHeaderContainer} from "@/component/container/HomeHeaderContainer";
import {Image, ScrollView, Text, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {NewestFeatureCard} from "@/component/card/NewestFeatureCard";
import {SearchInput} from "@/component/input/SearchInput";
import {HomeFeaturedContainer} from "@/component/container/HomeFeaturedContainer";
import {HomeLearningContainer} from "@/component/container/HomeLearningContainer";
import {HomeContent} from "@/component/content/HomeContent";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {NotificationContent} from "@/component/content/NotificationContent";

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
          <ScrollView
              contentContainerStyle={{paddingHorizontal: 30}}
          >
              <NotificationContent />
          </ScrollView>
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}