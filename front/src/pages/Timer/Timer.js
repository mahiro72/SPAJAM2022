import React, { useState,useEffect } from "react";
import { Button, View, Text, Dimensions, TouchableHighlight,Image } from "react-native";
import SecTitle from "../../components/SecTitle";

import MyTimer from "./MyTimer";

export default Timer = ({setPage}) => {

  const sec = 6;
  const time = new Date();
  time.setSeconds(time.getSeconds() + sec); // 10 minutes timer
  return (
    <View>
      <SecTitle title={"Timer"} />
      <MyTimer expiryTimestamp={time} initTimeSec={sec} setPage={setPage}/>
    </View>
  );
}
