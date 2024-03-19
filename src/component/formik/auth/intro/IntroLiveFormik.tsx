import {View} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {InputSearchDropdown} from "@/component/dropdown/InputSearchDropdown";
import {intro} from "@/store/modules/intro";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";


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
        },
        {
            value: 'Ivory Coast'
        },
        {
            value: 'Ivory Coast'
        }
    ]

    const dispatch = useDispatch<AppDispatch>()
    function next() {
        dispatch(intro.mutation.setIndex(2))

    }
  return(
      <View style={{gap: 15}}>
            <InputSearchDropdown placeholder={'Select a State'}  data={country}/>
          <BaseButton onPress={next} containerStyle={{marginTop: 120}} type={'base'} title={'Next'} />
      </View>
  )
}

