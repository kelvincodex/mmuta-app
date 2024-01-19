import {AuthLayout} from "@/view/layout/AuthLayout";
import {SignupFormik} from "@/component/formik/auth/SignupFormik";

export const SignupScreen = () => {
  return(
      <AuthLayout title={'Sign Up'}>
        <SignupFormik />
      </AuthLayout>
  )
}