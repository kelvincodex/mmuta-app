import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {Image, ScrollView, View} from "react-native";
import {SearchInput} from "@/component/input/SearchInput";
import {SubjectData} from "@/app/toolkit/data/SubjectData";
import {SubjectCard} from "@/component/card/SubjectCard";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";
import {SubjectContent} from "@/component/content/SubjectContent";

export const SubjectScreen = () => {
  const {setOptions} = useNavigation()
  useLayoutEffect(() => {
    setOptions({
      headerShown: true,
      header: ()=> <TabHeaderContainer title={'Subjects'} />
    })
  }, []);

  return(
      <View style={{flex: 1, paddingTop: 20}}>
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <SubjectContent />
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}