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
import {SubjectData} from "@/toolkit/data/SubjectData";
import {SubjectCard} from "@/component/card/SubjectCard";
import {DownloadLessonCard} from "@/component/card/DownloadLessonCard";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const SavedScreen = () => {
    const {setOptions} = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerShown: true,
            header: () =>  <TabHeaderContainer title={'Saved Lessons'} />

        })
    }, []);
  return(
      <View style={{flex: 1, paddingTop: 20}}>
          <ScrollView
              contentContainerStyle={{paddingHorizontal: 30}}
          >
            <SearchInput />
              <View>
                  <Text style={{fontSize: 16, fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium, lineHeight: 19, color: ThemeConstantUtil.COLOR.neutral["75"], marginVertical: 10}}>Your downloaded lessons</Text>
                  {
                      SubjectData.map((value, index)=>{
                          return (
                              <DownloadLessonCard key={index} item={value} />
                          )
                      })
                  }
              </View>
          </ScrollView>
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}