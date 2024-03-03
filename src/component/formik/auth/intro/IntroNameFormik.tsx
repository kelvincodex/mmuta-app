import {View} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {intro} from "@/store/modules/intro";
import {IntroData} from "@/app/toolkit/data/IntroData";


export const IntroNameFormik = () => {
    const dispatch = useDispatch<AppDispatch>()

    function next() {
        dispatch(intro.mutation.setIntroData(1))
    }
  return(
      <View style={{gap: 15}}>
          <PlainInput containerStyle={{height: 68, borderRadius: 10}} placeholder={'Enter your first name'} title={'First name'}  />
          <PlainInput containerStyle={{height: 68, borderRadius: 10}} placeholder={'Enter your last name'} title={'Last name'}  />

          <BaseButton onPress={next}  containerStyle={{marginVertical: 30}} type={'base'} title={'Next'} />
      </View>
  )
}