import {AuthLayout} from "@/view/layout/AuthLayout";
import {SignInFormik} from "@/component/formik/auth/SignInFormik";

export const SignInScreen = () => {
  return(
      <AuthLayout title={'Sign In'}>
        <SignInFormik />
      </AuthLayout>
  )
}