import {useFormik} from "formik";
import {Text, TextInput, View} from "react-native";
import {BaseInput} from "@/component/input/BaseInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg"
export const SignupFormik = () => {
    const formik = useFormik({
         initialValues:{},
         onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30}}>
          <BaseInput label={'Phone Number'} Icon={BaseTelephone} />
      </View>
  )
}