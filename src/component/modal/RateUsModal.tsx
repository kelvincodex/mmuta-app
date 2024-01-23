import {Image, ImageBackground, Modal, ModalProps, StyleSheet, Text, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BaseCancel from "@/assets/icon/base-cancel.svg"
import ActiveRate from "@/assets/icon/green-rate.svg"
import InActiveRate from "@/assets/icon/in-active-green-rate.svg"
import Animated, {BounceIn, BounceOut} from "react-native-reanimated";
import {useLayoutEffect, useState} from "react";
import {SamplePopupModal} from "@/component/modal/SamplePopupModal";

export const RateUsModal = ({...props}: ModalProps) => {
    const [visible, setVisible] = useState<boolean>(false)

    useLayoutEffect(() => {
        setVisible(true)
    }, []);
  return(
    <SamplePopupModal visible={visible} oncloseFunction={()=> setVisible(!visible)}>
        <ImageBackground source={require('@/assets/image/rateUsCurves.png')} resizeMode={'cover'}  style={{width: '100%', height: '100%', transform: [{scale: 1.06}, {scaleY: 1.02}]}} >
            <View style={{paddingHorizontal: 50, marginTop: 100,alignItems: 'center', gap: 20}}>
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
    </SamplePopupModal>
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