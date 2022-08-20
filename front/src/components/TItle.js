import fontStyles from '../../styles/common/Font.style'
import containerStyles from "../../styles/common/Container.style"
import { Text } from "react-native"

const Title = ({title:title})=>{
    return (
        <>
            <Text style={[fontStyles.title,containerStyles.title]}>{title}</Text>
        </>
    )
}

export default Title;