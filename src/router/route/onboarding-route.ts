import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {StartupScreen} from "@/view/screen/onboarding/StartupScreen";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {LanguageScreen} from "@/view/screen/onboarding/LanguageScreen";
import {GetStartedScreen} from "@/view/screen/onboarding/GetStartedScreen";
import {FeatureScreen} from "@/view/screen/onboarding/FeatureScreen";
import {WelcomeScreen} from "@/view/screen/onboarding/WelcomeScreen";

export const onboardingRoute = [
    {
        name: RouterConstantUtil.onboarding.startup,
        component: StartupScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.language,
        component: LanguageScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.getStarted,
        component: GetStartedScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.feature,
        component: FeatureScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
    {
        name: RouterConstantUtil.onboarding.welcome,
        component: WelcomeScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },
]