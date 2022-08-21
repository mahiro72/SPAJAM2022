import { useState,useEffect } from "react";
import { Button, View } from "react-native";
import SecTitle from "../../components/SecTitle";

import MyTimer from "./MyTimer";

const Timer = ({setPage,drinkId}) => {
    const [sec, setSec] = useState(60)
    useEffect(()=>{
        fetch(`http://localhost:8080/drink/best?id=${drinkId}`)
        .then(res => res.json())
        .then((data)=>{
            setSec(data.best_time);
            time.setSeconds(time.getSeconds() + data.best_time);
        })
    },[])

  const time = new Date();
  time.setSeconds(time.getSeconds() + sec); // 10 minutes timer
  return (
    <View>
      <SecTitle title={`Timer`} />
      <MyTimer expiryTimestamp={time} initTimeSec={sec} setPage={setPage}/>
    </View>
  );
}

export default Timer;
