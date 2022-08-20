import React from 'react'
import Title from '../../components/TItle'
import { Button, Text } from "react-native"
import buttonStyles from '../../../styles/common/Button.style'
import Icon from './Icon'

const Top = ({setPage:setPage}) => {
  return (
    <>
        <Title title={"Reiko🧊"} />
        <Icon />
        <Button 
          title='今すぐはじめる' 
          style={buttonStyles.topButton}
          onPress={()=>{setPage("select")}}
          color={"#21A0DB"}
        />
    </>
  )
}

export default Top