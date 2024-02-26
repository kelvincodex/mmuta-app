import {StyleSheet, Text, View} from "react-native";
import {IconInput} from "@/component/input/IconInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg";
import {BaseButton} from "@/component/button/BaseButton";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {OTPInput} from "@/component/input/OTPInput";
import {useNavigation} from "@react-navigation/native";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useFormik} from "formik";

export const ResetPasswordVerificationFormik = () => {
    const navigation = useNavigation()

    function navigateToResetPassword() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.resetPassword)
    }


    const formik = useFormik({
        initialValues:{},
        onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput label={'Phone Number'} Icon={BaseTelephone} placeholder={'Enter your phone number'} />

          <BaseButton   containerStyle={{width: 314, height: 62, backgroundColor: ThemeConstantUtil.COLOR.accent["100"]}} type={'base'} title={'Get Verification Code'} />

          <OTPInput containerStyle={{marginVertical: 20}} label={'Enter verification code'} />

          <BaseButton onPress={navigateToResetPassword} containerStyle={{width: 314, height: 62}} type={'base'} title={'Confirm'} />

          <Text style={styles.back}>Go back</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    back:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.primary["100"]
    }
})