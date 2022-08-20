import { Text, View } from "react-native"

import fontStyles from "../../../styles/common/Font.style"
import containerStyles from "../../../styles/common/Container.style"
import centerStyles from "../../../styles/common/Center.style"

const SelectTitle = ({title:title})=>{
    return (
        <View style={centerStyles.textCenter}>
            <Text style={[fontStyles.selectTitle,containerStyles.secTitle]}>{title}</Text>
        </View>
    )
}

export default SelectTitle;