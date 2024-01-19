import {Text, View} from "react-native";
import {indexStyle} from "@/assets/style/Index";
import {BaseButton} from "@/component/button/BaseButton";
import {LanguageData} from "@/toolkit/data/LanguageData";
import {useState} from "react";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";

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
          {
              languageData.buttons.map((value, index)=> {
                  return (
                          <BaseButton
                              key={index + 1}
                              onPress={() =>handleSelected(value)}
                              textStyle={[{fontSize: languageData == LanguageData[2] ? 18 : 20 },
                                  {color: selected == value ? ThemeConstantUtil.COLOR.white : ThemeConstantUtil.COLOR.secondary["100"] }]}
                              title={value}
                              containerStyle={[{backgroundColor: selected == value ? ThemeConstantUtil.COLOR.secondary["100"] : ThemeConstantUtil.COLOR.white, marginVertical: 6}]}
                          />
                  )
              })
          }

          <BaseButton containerStyle={{borderWidth: 0, marginTop: languageData !== LanguageData[0] ? 200 : 50}} onPress={proceed} textStyle={{fontFamily: ThemeConstantUtil.FONT_FAMILY.glory, fontSize: 25}} title={"Continue"} />
      </View>
  )
}