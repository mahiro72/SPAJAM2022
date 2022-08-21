import React from 'react'
import { TouchableHighlight, Text, Image, View, Alert ,Dimensions} from 'react-native';

// style
import circleStyles from '../../../styles/common/Circle.style';
import shadowStyles from '../../../styles/common/Shadow.style';
import positionStyles from '../../../styles/common/Position.style';
import fontStyles from '../../../styles/common/Font.style';

const SecDrink = ({drink,setDrinkId,drinkId,selectDrinkId,setPage}) => {
  const showAlert = ()=>{
    Alert.alert(
      `${drink.name}を冷やしますか?`,
      ``,
      [
        {text: 'タイマーを開始する', onPress: () => {setDrinkId(drinkId);setPage("timer")}},
        {text: '戻る', onPress: () => {console.log("test2")}, style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
  return (
    <View style={shadowStyles.drinkShadow}>
        <TouchableHighlight
            style = {
              {
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.70,
                height: Dimensions.get('window').width * 0.30,
                backgroundColor: "#fff",
                justifyContent: 'center',
                alignItems: 'center',
                margin:7,
            }
            }
            underlayColor = '#ccc'
            onPress={()=>{
              showAlert()
            }}
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


