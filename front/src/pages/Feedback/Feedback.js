import React from 'react';
import { Button, Text, View } from 'react-native';

const Feedback = ({setPage}) => {
  return (
    <>
    <Button onPress={()=>{setPage("top")}}  title={"topに戻る"} />
    </>
  )
}

export default Feedback