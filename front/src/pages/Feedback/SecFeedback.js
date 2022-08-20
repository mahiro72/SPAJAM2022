import React from 'react'
import { TouchableHighlight, Text, Image, View,Button,Dimensions } from 'react-native';

const SecFeedback = ({text,emotion,color,isSelect,setNowSelect}) => {
  return (
    <Text>
    <View>
    <TouchableHighlight
        style = {
            {
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.20,
                height: Dimensions.get('window').width * 0.20,
                backgroundColor:isSelect===color?color:"#fff",
                justifyContent: 'center',
                alignItems: 'center',
                margin:7,
            }
        }
        underlayColor = {isSelect?color:"#fff"}
        onPress={()=>{setNowSelect("ref")}}
    >
        <View>
            <Text>{emotion}</Text>
            <Text>{text}</Text>
        </View>
    </TouchableHighlight>
    </View>
    </Text>
  )
}

export default SecFeedback