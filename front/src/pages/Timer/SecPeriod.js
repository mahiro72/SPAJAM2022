import React, { useEffect } from 'react'
import { Text } from 'react-native'

const SecPeriod = ({seconds}) => {
  useEffect(()=>{
  },[seconds])
  return (
    <Text>{".".repeat(4-seconds%5)}</Text>
  )
}

export default SecPeriod