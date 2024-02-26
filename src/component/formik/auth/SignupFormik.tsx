import {useFormik} from "formik";
import {StyleSheet, Text, View} from "react-native";
import {IconInput} from "@/component/input/IconInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg"
import BasePadlock from "@/assets/icon/base-padlock.svg"
import {BaseButton} from "@/component/button/BaseButton";
import {Checkbox} from "expo-checkbox";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
export const SignupFormik = () => {
    const navigation = useNavigation()
    function navigateToSignIn() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signIn)
    }
    function navigateToConfirm() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.confirmAccount)
    }
    const formik = useFormik({
         initialValues:{},
         onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput label={'Phone Number'} Icon={BaseTelephone} placeholder={'Enter your phone number'} />
          <IconInput label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />

          <View style={{width: 280, flexDirection: 'row', gap: 10, alignItems:"flex-start", alignSelf:"flex-start"}}>
              <Checkbox style={styles.checkbox} />
              <Text style={styles.text}>By signing up, you agree to our  <Text style={styles.activeText}>Terms and Conditions</Text></Text>
          </View>
          <BaseButton onPress={navigateToConfirm} containerStyle={{width: 314, height: 62}} type={'base'} title={'Sign up'} />

          <Text style={styles.question}>Have an account already? <Text onPress={navigateToSignIn} style={styles.activeQuestion}>Sign In</Text></Text>
      </View>
  )
}

const styles = StyleSheet.create({
    checkbox:{
        color: ThemeConstantUtil.COLOR.primary["75"],
        borderRadius: 5,
        width: 21,
        height: 21
    },
    text:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 14,
        lineHeight: 17,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    },
    activeText:{
        color: ThemeConstantUtil.COLOR.primary["75"]
    },
    question:{
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 16,
        lineHeight: 21,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        transform: [{translateY: 60}],
        zIndex: -999

    },
    activeQuestion:{
        color: ThemeConstantUtil.COLOR.primary["100"],
        zIndex: 999
    }
})