import {Pressable, StyleSheet, Text, View} from "react-native";
import {BaseButton} from "@/component/button/BaseButton";
import CaretDown from "@/assets/icon/caret-down.svg"
import {BaseDateTimePicker} from "@/component/dateTimePicker/BaseDateTimePicker";
import {useEffect, useState} from "react";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const BirthdayFormik = () => {

    const [show, setShow] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<number>(new Date().getDate())


    useEffect(() => {
        console.log(selectedDate)

    }, []);

  return(
      <View style={{gap: 15}}>
          <Pressable onPress={()=> setShow(!show)} style={styles.pressable}>
            <Text>
                Select a date
            </Text>
              <CaretDown />
          </Pressable>
          <BaseDateTimePicker visible={show} se />
          <BaseButton  containerStyle={{marginTop: 120}} type={'base'} title={'Next'} />
      </View>
  )
}

const styles = StyleSheet.create({
    pressable: {
        borderWidth: 2,
        height: 68,
        borderRadius: 10,
        borderColor: ThemeConstantUtil.COLOR.neutral["75"],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 10
    }
})
