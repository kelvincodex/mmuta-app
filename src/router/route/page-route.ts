import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";
import {StartupScreen} from "@/view/screen/onboarding/StartupScreen";
import {NavigatorTypeConstantUtil} from "@/util/constant/NavigatorTypeConstantUtil";
import {LanguageScreen} from "@/view/screen/onboarding/LanguageScreen";
import {GetStartedScreen} from "@/view/screen/onboarding/GetStartedScreen";
import {FeatureScreen} from "@/view/screen/onboarding/FeatureScreen";
import {SignupScreen} from "@/view/screen/auth/SignupScreen";
import {SignInScreen} from "@/view/screen/auth/SignInScreen";
import {TopicScreen} from "@/view/screen/page/TopicScreen";

export const pageRoute = [
    {
        name: RouterConstantUtil.page.topic,
        component: TopicScreen,
        options: {type: NavigatorTypeConstantUtil.Stack}
    },

]