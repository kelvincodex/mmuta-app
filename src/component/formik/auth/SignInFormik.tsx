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
export const SignInFormik = () => {
    const navigation = useNavigation()
    function navigateToSignUp() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signup)
    }

    function navigateToHome() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.tab.home)
    }
    const formik = useFormik({
         initialValues:{},
         onSubmit: ()=>{},
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput label={'Phone Number'} Icon={BaseTelephone} placeholder={'Enter your phone number'} />
          <IconInput label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />

         <Text style={styles.activeText}>Forgot password?</Text>

          <BaseButton onPress={navigateToHome} containerStyle={{width: 314, height: 62}} type={'base'} title={'Sign In'} />

          <Text style={styles.question}>Don’t have an account? <Text onPress={navigateToSignUp} style={styles.activeQuestion}>Sign Up</Text></Text>
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
        color: ThemeConstantUtil.COLOR.primary["75"],
        alignSelf:"flex-end",
        transform: [{translateY: -15}]
    },
    question:{
        color: ThemeConstantUtil.COLOR.neutral["75"],
        fontSize: 16,
        lineHeight: 21,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        transform: [{translateY: 70}],
        zIndex: -999

    },
    activeQuestion:{
        color: ThemeConstantUtil.COLOR.primary["100"],
        zIndex: 999
    }
})