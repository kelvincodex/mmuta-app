import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {TabHeaderContainer} from "@/component/container/TabHeaderContainer";
import {Image, ScrollView, View} from "react-native";
import {SearchInput} from "@/component/input/SearchInput";
import {SubjectData} from "@/toolkit/data/SubjectData";
import {SubjectCard} from "@/component/card/SubjectCard";

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
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20}}
        >
          <SearchInput />
          <View>
            {
              SubjectData.map((value, index)=>{
                return (
                    <SubjectCard key={index} item={value} />
                )
              })
            }
          </View>
        </ScrollView>
          <Image source={require('@/assets/image/shadow.png')} resizeMode={'cover'} style={{width: '100%', height: 22}} />
      </View>
  )
}