import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {SignupScreen} from "@/view/screen/auth/SignupScreen";
import {SignInScreen} from "@/view/screen/auth/SignInScreen";
import {AuthStatusScreen} from "@/view/screen/auth/AuthStatusScreen";
import {ResetPasswordVerificationScreen} from "@/view/screen/auth/ResetPasswordVerificationScreen";
import {ResetPasswordScreen} from "@/view/screen/auth/ResetPasswordScreen";
import {ConfirmAccountScreen} from "@/view/screen/auth/ConfirmAccountScreen";
import {IntroScreen} from "@/view/screen/auth/IntroScreen";

export const authRoute = [
    {
        name: RouterConstantUtil.auth.signup,
        component: SignupScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.signIn,
        component: SignInScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.authStatus,
        component: AuthStatusScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.confirmAccount,
        component: ConfirmAccountScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.resetPasswordVerification,
        component: ResetPasswordVerificationScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.resetPassword,
        component: ResetPasswordScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.auth.intro,
        component: IntroScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },


]