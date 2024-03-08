import {FlatList, ScrollView, Text, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {BaseButton} from "@/component/button/BaseButton";
import {LanguageData} from "@/app/toolkit/data/LanguageData";
import {useEffect, useState} from "react";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
import Animated, {SlideInUp} from "react-native-reanimated";

export const LanguageContent = () => {
    const [languageData, setLanguageData] = useState(LanguageData[0])
    const [selected, setSelected] = useState<string|null>(null)
    const navigation = useNavigation()
    function proceed() {
        if (selected == null) {
           return  false
        }
        if (languageData.title == LanguageData[0].title){
            setSelected(null)
            setLanguageData(LanguageData[1])
            return;
        }else if (languageData.title == LanguageData[1].title){
            setSelected(null)
            setLanguageData(LanguageData[2])
            return;
        }else {
            setSelected(null)
            RouteHelperUtil.navigate(navigation, RouterConstantUtil.onboarding.getStarted)
        }
    }

    function handleSelected(value: string){
        setSelected(value)
    }


  return (
      <View style={indexStyle.language_sub_container}>
          <Text style={[indexStyle.language_text, {marginTop: languageData !== LanguageData[0] ? 100 : 0}]}>{languageData.title}</Text>
          <View style={{height: languageData !== LanguageData[0] ? '30%' : '70%', justifyContent: 'center', alignItems: 'center'}}>
              <FlatList data={languageData.buttons}
                        contentContainerStyle={{gap: 10}}
                        renderItem={({item})=>{
                            return (
                                    <BaseButton
                                        onPress={() =>handleSelected(item)}
                                        type={selected == item ? 'base' : 'border'}
                                        textStyle={[]}
                                        title={item}
                                        containerStyle={[{backgroundColor: selected == item ? ThemeConstantUtil.COLOR.secondary["100"] : ThemeConstantUtil.COLOR.white, height: 46}]}
                                    />
                            )
                        }} />
          </View>

          <BaseButton containerStyle={{borderWidth: 0, marginTop: languageData !== LanguageData[0] ? 50 : 30}} onPress={proceed} textStyle={{fontFamily: ThemeConstantUtil.FONT_FAMILY.glory, fontSize: 25}} title={"Continue"} />
      </View>
  )
}