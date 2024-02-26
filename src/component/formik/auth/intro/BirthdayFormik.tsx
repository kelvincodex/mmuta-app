import {View} from "react-native";
import {PlainInput} from "@/component/input/PlainInput";
import {BaseButton} from "@/component/button/BaseButton";
import {InputSearchDropdown} from "@/component/dropdown/InputSearchDropdown";
import {DateDropdown} from "@/component/dropdown/DateDropdown";

export const BirthdayFormik = () => {

  return(
      <View style={{gap: 15}}>
          <DateDropdown />
          <BaseButton  containerStyle={{marginTop: 120}} type={'base'} title={'Next'} />
      </View>
  )
}

