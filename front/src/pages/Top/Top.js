import React from 'react'
import Title from '../../components/TItle'
import {  Text } from "react-native"
import buttonStyles from '../../../styles/common/Button.style'
import Icon from './Icon'
import Button from '../../components/Button'

const Top = ({setPage:setPage}) => {
  return (
    <>
        <Title title={"Reikoπ§"} />
        <Icon style={{marginBottom:30}} />
        {/* <Button 
          title='δ»γγγ―γγγ' 
          style={buttonStyles.topButton}
          onPress={()=>{setPage("select")}}
          color={"#fff"}
        /> */}
        <Button onPress={()=>{setPage("select")}} title={'δ»γγγ―γγγ' }>

        </Button>
    </>
  )
}

export default Top