import {
    NativeSyntheticEvent,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputKeyPressEventData,
    View,
    ViewStyle
} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import React, {useEffect, useRef, useState} from "react";

interface OTPInputProps {
    containerStyle?: StyleProp<ViewStyle>,
    label?: string,
    onChangeText?: (value: string) => void
}
export const OTPInput = ({label, containerStyle, onChangeText}: OTPInputProps) => {
    const boxes = [...Array(5)]
    const [text, setText] = useState(([] as string[]).fill(""))
    const inputRef = useRef<TextInput | any>([...Array<any>(5)].map(()=> React.createRef()))

    function handleOnChangeText(value: string, index:number) {
        setText((prevState)=>{
            let texts = [...prevState]
            if (value.length > 1){
                if (/^\d+$/.test(value) || value === ""){
                    let valueArr = value.split("")
                    // texts.push(valueArr)
                    // texts[index] = valueArr

                    for (let i=0; i<= boxes.length - 1; i++){
                            texts[index] = valueArr[i]
                    }

                }
            }else {
                texts[index] = value
            }
            return texts
        })
    }

    function handleOnKeyPress(e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) {
        const {key} = e.nativeEvent
        const nextIndex = index + 1

        if (key.length === 1 && nextIndex < boxes.length){
            inputRef?.current[nextIndex].current.focus()
        }

        if (key === "Backspace" && index > 0){
            inputRef?.current[index - 1].current.focus()
            inputRef?.current[index].current.clear()
        }
    }

    useEffect(() => {
        if (onChangeText) {
            onChangeText(text.join("").toString())
        }
    }, [text]);
  return(
      <View style={[styles.container, containerStyle]}>
          <Text style={styles.title}>{label}</Text>
          <View style={styles.inputContainer}>
              {
                  boxes.map((_, index)=>{
                      return (
                          <TextInput
                              ref={inputRef.current[index]}
                              maxLength={index === (boxes.length - 1)? 1 :5}
                              key={index} style={styles.input}
                              onKeyPress={(e)=> handleOnKeyPress(e, index)}
                              value={text[index]}
                              keyboardType={"numeric"}
                              onChangeText={(value)=> handleOnChangeText(value, index)}
                          />
                      )
                  })
              }

          </View>
      </View>
  )
}

OTPInput.defaultProps ={
    label: 'Enter the code'
}

const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        gap: 20
    },
    input:{
        width: 49,
        height: 54,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: ThemeConstantUtil.COLOR.neutral["25"],
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 29.26,
        color: ThemeConstantUtil.COLOR.neutral["75"]
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratMedium,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: ThemeConstantUtil.COLOR.neutral["75"]
    }
})