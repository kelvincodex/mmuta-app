import {Image, ImageBackground, Modal, ModalProps, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BaseCancel from "@/assets/icon/base-cancel.svg"
import ActiveRate from "@/assets/icon/green-rate.svg"
import InActiveRate from "@/assets/icon/in-active-green-rate.svg"
import Animated, {BounceIn, BounceOut} from "react-native-reanimated";
import {useLayoutEffect, useState} from "react";

export const RateUsModal = ({...props}: ModalProps) => {
    const [visible, setVisible] = useState<boolean>(false)

    useLayoutEffect(() => {
        setVisible(true)
    }, []);
  return(
      <Modal
        visible={visible}
        transparent={true}
        statusBarTranslucent={true}
        style={{alignItems:'center', justifyContent:'center'}}
        {...props}
      >

          <Animated.View entering={BounceIn.duration(500).delay(2000)} exiting={BounceOut.duration(500).delay(3000)}  style={{flex: 1, justifyContent: 'flex-end', alignItems:'center',  }}>
              <View style={{width: 370, height: 532, borderRadius: 10, overflow: 'hidden', backgroundColor: ThemeConstantUtil.COLOR.white, transform:[{translateY: -100}]}}>
                  <ImageBackground source={require('@/assets/image/rateUsCurves.png')} resizeMode={'cover'}  style={{width: '100%', height: '100%', transform: [{scale: 1.04}, {scaleY: 1.02}]}} >
                      <BaseCancel onPress={()=> setVisible(!visible)} style={{alignSelf: 'flex-end', marginRight: 30, marginTop: 30}} />
                      <View style={{paddingHorizontal: 50, marginTop: 50,alignItems: 'center', gap: 20}}>
                          <Text style={styles.title}>Sure you have been enjoying your learning experience</Text>
                          <Image source={require('@/assets/image/colored-logo.png')} resizeMode={'cover'} />
                          <Text style={styles.label}>Tap on the stars to rate us</Text>
                          <View style={{flexDirection: 'row',alignItems:'center', gap: 10 }}>
                              <ActiveRate width={35} height={32} />
                              <ActiveRate width={35} height={32} />
                              <ActiveRate width={35} height={32} />
                              <ActiveRate width={35} height={32} />
                              <InActiveRate width={35} height={32} />
                          </View>
                      </View>
                  </ImageBackground>
              </View>
          </Animated.View>

      </Modal>
  )
}

const styles = StyleSheet.create({
    title:{
        color: ThemeConstantUtil.COLOR.neutral["100"],
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        lineHeight: 24,
        fontSize: 20,
        textAlign: 'center',
    },
    label:{
        color: ThemeConstantUtil.COLOR.neutral["100"],
        fontSize: 16,
        lineHeight: 19,
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular
    }
})