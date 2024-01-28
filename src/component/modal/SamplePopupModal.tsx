import {Modal, ModalProps, StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import BaseCancel from "@/assets/icon/base-cancel.svg"
import Animated, {BounceIn, BounceOut} from "react-native-reanimated";
import {ReactNode} from "react";

interface PopupModalProps {
    children: ReactNode,
    oncloseFunction?: ()=> void,
    containerStyle?: StyleProp<ViewStyle>
}
export const SamplePopupModal = ({containerStyle, oncloseFunction, children,...props}: PopupModalProps & ModalProps) => {

    return(
        <Modal
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={oncloseFunction && oncloseFunction}
            accessibilityRole={'alert'}
            animationType={"slide"}
            {...props}
        >

            <View  style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: 'hsla(0, 0%, 0%, .3)' }}>
                <Animated.View entering={BounceIn.duration(500).delay(2000)}
                               style={[{width: 370, height: 532, borderRadius: 10, overflow: 'hidden', backgroundColor: ThemeConstantUtil.COLOR.white, transform:[{translateY: 100}]}, containerStyle]}>
                    <BaseCancel onPress={oncloseFunction && oncloseFunction} style={{position: 'absolute', zIndex: 999, right: 20, top: 20}} />
                    {children}
                </Animated.View>
            </View>

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