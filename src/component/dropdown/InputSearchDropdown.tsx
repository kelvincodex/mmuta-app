import {StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import CaretDown from "@/assets/icon/caret-down.svg"
import {useState} from "react";
import {array} from "yup";
interface InputSearchDropdownProps {
    data: DataType[],
    onSelect?: (text: string)=> void
}

type DataType = {
    value: string,
    label?: string
}
export const InputSearchDropdown = ({onSelect, data,...props}: InputSearchDropdownProps & TextInputProps) => {
    const [query, setQuery] = useState<string>()
    const [filteredData, setFilteredData] = useState<DataType[]>([])
    
    function handleOnChangeText(text: string) {
        setQuery(text)
        const filter = data.filter((value)=>{
            return value.value.toLowerCase().includes(text.toLowerCase())
        })
        console.log(filter)
        setFilteredData(filter)
    }

    function handleSelect(text: string){
        setQuery(text)
       onSelect && onSelect(text)
        setFilteredData([])
    }

    console.log(filteredData)
  return(
      <View>
          <View style={styles.inputContainer}>
              <TextInput value={query}  style={styles.input} onChangeText={handleOnChangeText} {...props} />
              <CaretDown />
          </View>
          {
              filteredData?.length > 0 && (
                  <View style={styles.dropdownContainer}>
                      {
                          filteredData?.map((value, index)=>{
                              return (
                                  <TouchableOpacity key={index} style={styles.dropdownItem} onPress={()=> handleSelect(value.value)}>
                                      <Text style={styles.dropdownItemText}>{value.label ?? value.value}</Text>
                                  </TouchableOpacity>
                              )
                          })
                      }

                  </View>
              )
          }

      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        borderWidth: 1,
        height: 68,
        borderRadius: 10,
        borderColor: ThemeConstantUtil.COLOR.neutral["50"],
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    input:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 16,
        lineHeight: 19,
        color: ThemeConstantUtil.COLOR.neutral["75"],
        flex: 1,
    },
    dropdownContainer:{
        borderWidth: 1,
        borderColor: ThemeConstantUtil.COLOR.neutral["50"],
        // backgroundColor: ThemeConstantUtil.COLOR.white
        padding: 10
    },
    dropdownItem:{
        height: 30,
        gap: 10
    },
    dropdownItemText:{
        fontFamily: ThemeConstantUtil.FONT_FAMILY.montserratRegular,
        fontSize: 16,
        lineHeight: 19,
        color: ThemeConstantUtil.COLOR.neutral["75"],
    },
})