import React from 'react'
import drinkData from '../../../data/select/drink'
import SecDrink from './SecDrink'
import {SafeAreaView,ScrollView, View,FlatList,Text, Button} from 'react-native'
import SelectTitle from './SelectTitle';
import buttonStyles from '../../../styles/common/Button.style'

// style
import scrollStyles from '../../../styles/common/Scroll.style';

const Select = ({setPage}) => {
  return (
    <View style={{marginTop:60,alignItems: 'center'}}>
      <SelectTitle title={"どの飲み物を冷やしますか?"}/>
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
	  <Button 
          title='タイマーを開始する' 
          style={buttonStyles.topButton}
          onPress={()=>{setPage("timer")}}
          color={"#C8A45B"}
        />
    </View>
  )
}

export default Select