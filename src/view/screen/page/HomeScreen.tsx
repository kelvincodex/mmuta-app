import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {HomeHeaderContainer} from "@/component/container/HomeHeaderContainer";
import {Image, ScrollView, View} from "react-native";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";
import {SearchInput} from "@/component/input/SearchInput";
import {NewestFeatureCard} from "@/component/card/NewestFeatureCard";
import {HomeFeaturedContainer} from "@/component/container/HomeFeaturedContainer";
import {HomeLearningContainer} from "@/component/container/HomeLearningContainer";
import {HomeRecommendedLessonContainer} from "@/component/container/HomeRecommendedLessonContainer";
import {HomeContent} from "@/component/content/HomeContent";
import {RateUsModal} from "@/component/modal/RateUsModal";

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
          <RateUsModal />
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <HomeContent />
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}