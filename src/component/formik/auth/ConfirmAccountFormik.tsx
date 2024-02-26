import {useFormik} from "formik";
import {StyleSheet, Text, View} from "react-native";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
import Pencil from "@/assets/icon/base-pencil.svg"
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {OTPInput} from "@/component/input/OTPInput";
import {BaseButton} from "@/component/button/BaseButton";
export const ConfirmAccountFormik = () => {
    const navigation = useNavigation()
    function navigateToSignIn() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signIn)
    }

    const formik = useFormik({
         initialValues:{},
         onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
        <Text style={styles.title}>We have sent a 5-digit code {"\n"} by SMS to</Text>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
              <Pencil />
              <Text style={styles.labelPen}>08111746275</Text>
          </View>

        <OTPInput containerStyle={{marginVertical: 20}} />

          <BaseButton onPress={navigateToSignIn} type={'base'} title={'Confirm'} />

          <Text style={styles.resendText}>Resend Code</Text>
          <Text style={styles.lightText}>Use email instead</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["75"],
    },
    labelPen:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        fontSize: 19,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.primary["75"],
        lineHeight: 23,

    },
    resendText:{
        color: ThemeConstantUtil.COLOR.primary["100"],
        fontSize: 18,
        lineHeight: 21,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,

    },
    lightText:{
        color: ThemeConstantUtil.COLOR.primary["75"],
        fontSize: 16,
        lineHeight: 19,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,

    }
})