import React from 'react'
import { TouchableHighlight, Text, Image, View } from 'react-native';

// style
import circleStyles from '../../../styles/common/Circle.style';
import shadowStyles from '../../../styles/common/Shadow.style';
import positionStyles from '../../../styles/common/Position.style';
import fontStyles from '../../../styles/common/Font.style';

const SecDrink = ({drink}) => {
  return (
    <View style={shadowStyles.drinkShadow}>
        <TouchableHighlight
            style = {[circleStyles.drinkCircle]}
            underlayColor = '#ccc'
        >
          <View style={positionStyles.flex}>
              <Text style={fontStyles.drinkText}>{drink.name}</Text>
              <Image 
                style={{height: 60,width:60}}
                resizeMode='contain'
                source={drink.img} 
              />
          </View>
        </TouchableHighlight>
    </View>
  )
}

export default SecDrink


