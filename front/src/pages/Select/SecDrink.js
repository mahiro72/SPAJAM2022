import React from 'react'
import { TouchableHighlight, Text, Image } from 'react-native';

// style
import circleStyles from '../../../styles/common/Circle.style';

const SecDrink = ({drink}) => {
  return (
    <>
        <TouchableHighlight
            style = {[circleStyles.drinkCircle]}
            underlayColor = '#ccc'
        >
            <Text>hello,{drink.name}</Text>
        {/* <Image style={{width:'65%'}} source={} /> */}
        </TouchableHighlight>
    </>
  )
}

export default SecDrink


