import React from 'react'
import drinkData from '../../../data/select/drink'
import SecDrink from './SecDrink'
import {SafeAreaView,ScrollView, View,FlatList,Text, Button} from 'react-native'
import SelectTitle from './SelectTitle';
import buttonStyles from '../../../styles/common/Button.style'

// style
import scrollStyles from '../../../styles/common/Scroll.style';

const Select = ({setPage,setDrinkId,drinkId}) => {
  return (
    <View style={{marginTop:60,alignItems: 'center'}}>
      <SelectTitle title={"どの飲み物を冷やしますか?"}/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      {
        drinkData.map((drink,idx)=>{
          return (
            <SecDrink key={idx} selectDrinkId={drinkId} drinkId={idx+1} drink={drink} setDrinkId={setDrinkId} setPage={setPage}/>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

export default Select