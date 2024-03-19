import BaseTelephone from "@/assets/icon/base-telephone.svg"
import BaseEnvelop from "@/assets/icon/base-envelope.svg"
import {IconInput} from "@/component/input/IconInput";
import {FormikValues} from "formik";
import {StyleSheet, Text} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

interface SwitchPhoneToEmailInputProps {
  switchTo: 'phone' | 'email',
  formik: FormikValues,
  authState: any,
  switchToAction: ()=> void
}

export const SwitchPhoneToEmailInput = ({switchTo, formik,authState, switchToAction }: SwitchPhoneToEmailInputProps) => {

  return(
      <>
        <Text onPress={switchToAction}  style={styles.tagText}>Use {switchTo == "phone" ? "email" : "phone"} instead</Text>
        {
          switchTo == "phone" ?
              <IconInput
                  onChangeText={formik.handleChange('phone')}
                  value={formik.values.phone}
                  errorText={authState.errors?.phone ? authState.errors?.phone : formik.touched.phone ? formik.errors.phone : ""}
                  onBlur={formik.handleBlur('phone')}
                  keyboardType={"number-pad"}
                  label={'Phone'} Icon={BaseTelephone} placeholder={'Enter your phone number'} />
              :
              <IconInput
                  onChangeText={formik.handleChange('email')}
                  value={formik.values.email}
                  errorText={authState.errors?.email ? authState.errors?.email : formik.touched.email ? formik.errors.email : ""}
                  onBlur={formik.handleBlur('email')}
                  label={'Email'} Icon={BaseEnvelop} placeholder={'Enter your email address'} />
        }
      </>
  )
}

SwitchPhoneToEmailInput.defaultProps ={
  switchTo: 'phone'
}

const styles = StyleSheet.create({
  tagText:{
    position: "absolute",
    right: 0,
    color: ThemeConstantUtil.COLOR.primary["75"],
    fontSize: 13,
    fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratAltRegular,
    lineHeight: 15,
    zIndex: 999
  }
})