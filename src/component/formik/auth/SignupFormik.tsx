import {useFormik} from "formik";
import {StyleSheet, Text, View} from "react-native";
import {IconInput} from "@/component/input/IconInput";
import BaseTelephone from "@/assets/icon/base-telephone.svg"
import BasePadlock from "@/assets/icon/base-padlock.svg"
import BaseEnvelop from "@/assets/icon/base-envelope.svg"
import {BaseButton} from "@/component/button/BaseButton";
import {Checkbox} from "expo-checkbox";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {useNavigation} from "@react-navigation/native";
import {RegisterOneProp, RegisterOneRequest} from "@/model/request/auth/RegisterOneRequest";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "@/store/modules/auth";
import {AppDispatch, RootState} from "@/store";
import {AuthSchema} from "@/app/scheme/AuthScheme";
import {useState} from "react";
export const SignupFormik = () => {
    const [check, setCheck] = useState<boolean>(false)

    const navigation = useNavigation()
    const dispatch = useDispatch<AppDispatch>()
    const authState = useSelector<RootState>((state)=> state.auth) as any
    function navigateToSignIn() {
        RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.signIn)
    }


    function handleSignUp(value: RegisterOneProp) {
        dispatch(auth.action.initiateRegister(value)).then((value)=> {
            if (value.payload.success){
                RouteHelperUtil.navigate(navigation, RouterConstantUtil.auth.confirmAccount)
            }
        })
    }

    const formik = useFormik({
         initialValues: RegisterOneRequest,
         onSubmit: handleSignUp,
         validationSchema: AuthSchema.initiateRegister
    })
  return(
      <View style={{marginTop: 30, gap: 20, alignItems:"center"}}>
          <IconInput
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              errorText={authState.errors?.email ? authState.errors?.email : formik.touched.email ? formik.errors.email : ""}
              onBlur={formik.handleBlur('email')}
              label={'Email'} Icon={BaseEnvelop} placeholder={'Enter your email address'} />
          <IconInput
              secureTextEntry={true}
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              errorText={authState.errors?.password ? authState.errors?.password : formik.touched.password ? formik.errors.password : ""}
              onBlur={formik.handleBlur('password')}
              label={'Password'} Icon={BasePadlock} placeholder={'Enter your password'} />

          <View style={{width: 280, flexDirection: 'row', gap: 10, alignItems:"flex-start", alignSelf:"flex-start"}}>
              <Checkbox value={check} onValueChange={setCheck}  style={styles.checkbox} />
              <Text style={styles.text}>By signing up, you agree to our  <Text style={styles.activeText}>Terms and Conditions</Text></Text>
          </View>
          {
                !check &&
              <Text style={styles.errorText}>Must accept terms and conditions</Text>
          }
          <BaseButton loading={authState.loading} onPress={()=>formik.handleSubmit()} containerStyle={{width: 314, height: 62}} type={'base'} title={'Sign up'} />

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
    },
    errorText:{
        fontSize: 13,
        lineHeight: 15.85,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
        color: ThemeConstantUtil.COLOR.error,
        textAlign: 'right',
        marginTop: 5
    }
})