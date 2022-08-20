import React from 'react'
import drinkData from '../../../data/select/drink'
import SecDrink from './SecDrink'
import {SafeAreaView,ScrollView, View,FlatList,Text} from 'react-native'

// style
import scrollStyles from '../../../styles/common/Scroll.style';

const Select = () => {
  return (
    <View style={{marginTop:60,alignItems: 'center'}}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      {
        drinkData.map((drink,idx)=>{
          return (
            <SecDrink key={idx} drink={drink} />
          )
        })
      }
      </ScrollView>
    </View>
  )
}

export default Select