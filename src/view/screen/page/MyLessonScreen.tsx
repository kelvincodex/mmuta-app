import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {View} from "react-native";
import {FloatIcon} from "@/component/util/FloatIcon";
import Sound from "@/assets/icon/base-sound-loud.svg";
import {SearchInput} from "@/component/input/SearchInput";
import {MyLessonContent} from "@/component/content/MyLessonContent";

export const MyLessonScreen = () => {
    const {setOptions} = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerShown: true,
            header: () =>  <TabHeaderContainer title={'My Lessons'} />

        })
    }, []);
  return(
      <View style={{flex: 1, paddingTop: 20}}>
          <FloatIcon Icon={Sound} containerStyle={{bottom: 20, right: 30}} />
          <SearchInput containerStyle={{marginHorizontal: 30}} placeholder={'Search for a subject'} />
          <MyLessonContent />
      </View>
  )
}