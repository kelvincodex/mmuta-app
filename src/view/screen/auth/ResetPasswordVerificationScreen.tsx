import {AuthLayout} from "@/view/layout/AuthLayout";
import {ResetPasswordVerificationFormik} from "@/component/formik/auth/ResetPasswordVerificationFormik";

export const ResetPasswordVerificationScreen = () => {
  return (
      <AuthLayout title={'Reset Password'}>
        <ResetPasswordVerificationFormik />
      </AuthLayout>
  )
}