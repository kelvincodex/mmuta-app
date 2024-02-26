import {AuthLayout} from "@/view/layout/AuthLayout";
import {View} from "react-native";
import {ResetPasswordFormik} from "@/component/formik/auth/ResetPasswordFormik";

export const ResetPasswordScreen = () => {
  return (
      <AuthLayout title={'Reset Password'}>
        <ResetPasswordFormik />
      </AuthLayout>
  )
}