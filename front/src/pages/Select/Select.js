import React from 'react'
import drinkData from '../../../data/select/drink'
import SecDrink from './SecDrink'
import {SafeAreaView,ScrollView, View,FlatList,Text} from 'react-native'

// style
import scrollStyles from '../../../styles/common/Scroll.style';

const Select = () => {
  return (
    <View style={{marginTop:30}}>
        <FlatList
          data={drinkData}
          numColumns={2}
          renderItem={(drink)=><SecDrink drink={drink}/>}
       />
    </View>
  )
}

export default Select