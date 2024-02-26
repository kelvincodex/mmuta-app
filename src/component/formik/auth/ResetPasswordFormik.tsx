import {useFormik} from "formik";
import {StyleSheet, Text, View} from "react-native";
import {IconInput} from "@/component/input/IconInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg"
import BasePadlock from "@/assets/icon/base-padlock.svg"
import {BaseButton} from "@/component/button/BaseButton";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {OTPInput} from "@/component/input/OTPInput";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
export const ResetPasswordFormik = () => {
    const navigation = useNavigation()
    function navigateToSignUp() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signup)
    }

    function navigateToAuthStatus() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.authStatus)
    }


    const formik = useFormik({
         initialValues:{},
         onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />
          <IconInput label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />



          <BaseButton onPress={navigateToAuthStatus} containerStyle={{width: 314, height: 62}} type={'base'} title={'Reset'} />

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
        color: ThemeConstantUtil.COLOR.primary["100"],
        marginTop: 70
    }
})