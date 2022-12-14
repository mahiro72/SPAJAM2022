import fontStyles from '../../styles/common/Font.style'
import containerStyles from "../../styles/common/Container.style"
import { Text, View } from "react-native"

import centerStyles from '../../styles/common/Center.style'

const Title = ({title:title})=>{
    return (
        <View style={centerStyles.textCenter}>
            <Text style={[fontStyles.title,containerStyles.title]}>{title}</Text>
        </View>
    )
}

export default Title;