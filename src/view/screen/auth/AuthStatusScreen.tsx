import {AuthLayout} from "@/view/layout/AuthLayout";
import {Image, View} from "react-native";
import {BaseButton} from "@/component/button/BaseButton";
import Animated, {BounceIn, BounceInUp} from "react-native-reanimated";
import {RouteHelperUtil} from "@/util/helper/RouteHelperUtil";
import {useNavigation} from "@react-navigation/native";
import {RouterConstantUtil} from "@/util/constant/RouterConstantUtil";


export const AuthStatusScreen = () => {
    const naivagation = useNavigation()
    function navigateToSignIn() {
        RouteHelperUtil.navigate(naivagation, RouterConstantUtil.auth.signIn)
    }

  return (
      <AuthLayout title={'Your new password has \n been successfully set!'} childrenStyle={{paddingTop: 30, gap: 70}}>
          <Animated.Image source={require('@/assets/image/check-circle-fill.png')} resizeMode={'cover'} entering={BounceIn} />
          <BaseButton onPress={navigateToSignIn} title={'sign in'} />
      </AuthLayout>
  )
}