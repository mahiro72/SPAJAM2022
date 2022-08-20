import fontStyles from '../../styles/common/Font.style'
import containerStyles from "../../styles/common/Container.style"
import { Text, View } from "react-native"

import centerStyles from '../../styles/common/Center.style'

const SecTitle = ({title:title})=>{
    return (
        <View style={centerStyles.textCenter}>
            <Text style={[fontStyles.secTitle,containerStyles.secTitle]}>{title}</Text>
        </View>
    )
}

export default SecTitle;