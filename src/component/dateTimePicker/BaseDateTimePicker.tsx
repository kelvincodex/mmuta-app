import DatePicker, {ModernDatepickerProps} from 'react-native-modern-datepicker';
import {View} from "react-native";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";
import {SamplePopupModal} from "@/component/modal/SamplePopupModal";

interface BaseDateTimePickerProps {
  visible: boolean
}
export const BaseDateTimePicker = ({visible, ...props}: BaseDateTimePickerProps & ModernDatepickerProps) => {


  return (
      <SamplePopupModal
          visible={visible}
        containerStyle={{
          height: 400,
          paddingTop: 20
        }}

        cancelIconShow={false}
      >
        <DatePicker
            options={{
              backgroundColor: ThemeConstantUtil.COLOR.white,
            }}
            mode={'calendar'}
            minuteInterval={30}
            current="2020-07-13"
            {...props}
        />
      </SamplePopupModal>

  )
}