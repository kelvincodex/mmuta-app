import {TouchableOpacity, Text, TouchableOpacityProps} from "react-native";
import {BaseButtonProps} from "@/types/component-type";
import {baseStyle} from "@/assets/style/__base";
import {ThemeConstantUtil} from "@/util/constant/ThemeConstantUtil";

export const BaseButton = ({title, textStyle, type,containerStyle,...props}: BaseButtonProps & TouchableOpacityProps) => {
    const backgroundColor = type == 'base' ? ThemeConstantUtil.COLOR.secondary["100"] : type == 'border' ? "transparent" : ThemeConstantUtil.COLOR.white
    const borderWidth = type == 'border'? 2 : 0
    const color =type == 'base' ? ThemeConstantUtil.COLOR.white : ThemeConstantUtil.COLOR.secondary["100"]
  return(
      <TouchableOpacity
          style={[baseStyle.baseButtonContainer, {backgroundColor:backgroundColor, borderWidth: borderWidth}, containerStyle ]}
          {...props}
      >
          <Text style={[baseStyle.baseButtonTitle, {color: color}, textStyle]}>{title}</Text>
      </TouchableOpacity>
  )
}

BaseButton.defaultProps = {
    type: 'border'
}