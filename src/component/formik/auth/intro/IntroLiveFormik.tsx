import {View} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {InputSearchDropdown} from "@/component/dropdown/InputSearchDropdown";


export const IntroLiveFormik = () => {

    const country = [
        {
            value: 'Nigeria',
        },
        {
            value: 'Niger'
        },
        {
            value: 'Ivory Coast'
        }
    ]
  return(
      <View style={{gap: 15}}>
            <InputSearchDropdown placeholder={'Select a country'}  data={country}/>
          <BaseButton  containerStyle={{marginTop: 120}} type={'base'} title={'Next'} />
      </View>
  )
}

