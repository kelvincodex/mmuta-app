import {ScrollView} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {KeyboardAvoidingViewLayout} from "@/view/layout/KeyboardAvoidingViewLayout";

export const ProfileFormik = () => {
  return(
      <KeyboardAvoidingViewLayout
        contentContainerStyle={{gap: 20}}
      >
          <PlainInput title={'Name'} />
          <PlainInput title={'Age'} />
          <PlainInput title={'Language'} />
          <PlainInput title={'Phone Number'} />
          <PlainInput title={'Email Address'} />
          <PlainInput title={'Password'} />

          <BaseButton type={'normal'}  title={'Save'} containerStyle={{width: 252, height: 40, alignSelf:'center', marginTop: 10, backgroundColor: ThemeConstantUtil.COLOR.success}} textStyle={{color: ThemeConstantUtil.COLOR.white}} />
      </KeyboardAvoidingViewLayout>
  )
}