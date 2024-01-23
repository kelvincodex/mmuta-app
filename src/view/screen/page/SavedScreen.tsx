import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ScrollView, Text, View} from "react-native";
import {SearchInput} from "@/component/input/SearchInput";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {SubjectData} from "@/app/toolkit/data/SubjectData";
import {DownloadLessonCard} from "@/component/card/DownloadLessonCard";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";
import {SavedContent} from "@/component/content/SavedContent";

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
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <SavedContent />
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}