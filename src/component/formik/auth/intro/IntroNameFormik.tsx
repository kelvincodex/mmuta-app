import {View} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {intro} from "@/store/modules/intro";


export const IntroNameFormik = () => {
    const dispatch = useDispatch<AppDispatch>()
    const introState = useSelector<RootState>((state)=> state.intro) as any

    function next() {
        console.log('working')
        dispatch(intro.mutation.setIndex(1))
    }
  return(
      <View style={{gap: 15}}>
          <PlainInput containerStyle={{height: 68, borderRadius: 10}} placeholder={'Enter your first name'} title={'First name'}  />
          <PlainInput containerStyle={{height: 68, borderRadius: 10}} placeholder={'Enter your last name'} title={'Last name'}  />

          <BaseButton onPress={next}  containerStyle={{marginVertical: 30}} type={'base'} title={'Next'} />
      </View>
  )
}