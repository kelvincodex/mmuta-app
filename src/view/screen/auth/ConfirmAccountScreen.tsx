import {AuthLayout} from "@/view/layout/AuthLayout";
import {ConfirmAccountFormik} from "@/component/formik/auth/ConfirmAccountFormik";

export const ConfirmAccountScreen = () => {
  return (
      <AuthLayout title={'Confirm Account'}>
        <ConfirmAccountFormik />
      </AuthLayout>
  )
}