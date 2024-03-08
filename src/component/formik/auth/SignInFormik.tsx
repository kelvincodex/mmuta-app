import {useFormik} from "formik";
import {StyleSheet, Text, View} from "react-native";
import {IconInput} from "@/component/input/IconInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg"
import BasePadlock from "@/assets/icon/base-padlock.svg"
import {BaseButton} from "@/component/button/BaseButton";
import {Checkbox} from "expo-checkbox";
import BaseEnvelop from "@/assets/icon/base-envelope.svg"
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {AuthSchema} from "@/app/scheme/AuthScheme";
import {LoginRequest, LoginRequestProps} from "@/model/request/auth/LoginRequest";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {auth} from "@/store/modules/auth";
export const SignInFormik = () => {
    const navigation = useNavigation()
    const authState = useSelector<RootState>((state)=> state.auth) as any
    const dispatch = useDispatch<AppDispatch>()

    function navigateToSignUp() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signup)
    }

    function handleLoginSubmit(value: LoginRequestProps) {
        dispatch(auth.action.login(value)).then((value)=>{
            if (value.payload.success){
                RouteHelperUtil.navigate(navigation, RouterConstantUtil.onboarding.welcome)
            }
        })
    }

    function navigateToIntro() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.intro)
    }

    function navigateToForgetPassword() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.resetPasswordVerification)
    }
    const formik = useFormik({
         initialValues: LoginRequest,
         onSubmit: handleLoginSubmit,
         validationSchema: AuthSchema.login
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput
              label={'Email'}
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              errorText={authState.errors?.email ? authState.errors?.email : formik.touched.email ? formik.errors.email : ""}
              onBlur={formik.handleBlur('email')}
              Icon={BaseEnvelop} placeholder={'Enter your email address'} />


          <IconInput
              secureTextEntry={true}
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              errorText={authState.errors?.password ? authState.errors?.password : formik.touched.password ? formik.errors.password : ""}
              label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />

         <Text onPress={navigateToForgetPassword} style={styles.activeText}>Forgot password?</Text>

          <BaseButton loading={authState.loading} onPress={()=>formik.handleSubmit()} containerStyle={{width: 314, height: 62}} type={'base'} title={'Sign In'} />

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