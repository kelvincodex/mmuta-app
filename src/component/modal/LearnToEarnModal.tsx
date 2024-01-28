import {Image, ModalProps, StyleSheet, View, Text} from "react-native";
import {useLayoutEffect, useState} from "react";
import {SamplePopupModal} from "@/component/modal/SamplePopupModal";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {BaseButton} from "@/component/button/BaseButton";

export const LearnToEarnModal = ({...props}: ModalProps) => {
    const [visible, setVisible] = useState<boolean>(true)

  return(
        <SamplePopupModal visible={visible}  oncloseFunction={()=> setVisible(!visible)} containerStyle={{transform: [{translateY: -200 }]}}>
            <Image source={require('@/assets/image/learn-to-earn-pop-tag.png')} resizeMode={'cover'} style={{height: 162 }}  />
            <View style={{transform: [{translateY: -110}], alignItems: 'center', paddingHorizontal: 40}}>
                <Text style={styles.title}>You must have completed learning at least 3 subjects to participate</Text>
                <Image source={require('@/assets/image/pretty-money.png')} resizeMode={'cover'} style={{marginVertical: 10}}  />
                <Text style={styles.subText}>Earn real cash and prizes when you complete at least three subjects from your curriculum</Text>

                <BaseButton type={'normal'} containerStyle={{backgroundColor: ThemeConstantUtil.COLOR.success, width: 288, height: 47, marginVertical: 10}} textStyle={{color: ThemeConstantUtil.COLOR.white, fontSize: 16}} title={'Continue Learning'} />
                <BaseButton containerStyle={{borderColor: ThemeConstantUtil.COLOR.neutral["50"], width: 288, height: 47}} textStyle={{color: ThemeConstantUtil.COLOR.neutral["50"], fontSize: 16}} title={'Go to Subjects'} />
            </View>
        </SamplePopupModal>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 17,
        lineHeight: 20,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["100"]
    },
    subText:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["100"],
        marginVertical: 10
    }
})