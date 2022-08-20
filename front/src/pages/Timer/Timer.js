import React, { useState,useEffect } from "react";
import { Button, View, Text, Dimensions, TouchableHighlight,Image } from "react-native";
import { useTimer } from "react-timer-hook";

import girlImg from "../../../image/top/girl.png"

import circleStyles from "../../../styles/common/Circle.style";
import fontStyles from "../../../styles/common/Font.style";
import centerStyles from "../../../styles/common/Center.style";

function MyTimer({ expiryTimestamp,initTimeSec ,setPage}) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
      });

  useEffect(() => {
    pause();
  }, [])

  const getSeconds = (h,m,s)=>{
    return h*3600+m*60+s;
  }

  const finish = ()=>{

  }

  return (

    <>
    <View>
        <View style={centerStyles.textCenter}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#555",
                margin: 20, 
            }}>少しずつ冷えてます...</Text>
        </View>
        <TouchableHighlight
            style = {circleStyles.timerCircle}
            underlayColor = '#ccc'
        >
            <View
                style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * (0.9-Math.min(getSeconds(hours,minutes,seconds)/initTimeSec,0.9)),
                    height: Dimensions.get('window').width * (0.9-Math.min(getSeconds(hours,minutes,seconds)/initTimeSec,0.9)),
                    backgroundColor:'#6495ed',
                    justifyContent: 'center',
                    alignItems: 'center'   
                }}
                underlayColor = '#ccc'
            >
                <Image source={girlImg} />
            </View>

        </TouchableHighlight>
        <View style={centerStyles.textCenter}>
            <Text style={fontStyles.timerText}>
                {hours}h {minutes}m {seconds}s    
            </Text>  
        </View>
      
        {
            isRunning
            ?<Button onPress={pause}  title={"pause"} />
            :<Button onPress={start}  title={"start"} />
        }
        {
            getSeconds(hours,minutes,seconds)===0
            ?<Button onPress={()=>setPage("feedback")}  title={"Finish"} />
            :null
        }
    </View>
    </>
  );
}

export default Timer = ({setPage}) => {

  const sec = 6;
  const time = new Date();
  time.setSeconds(time.getSeconds() + sec); // 10 minutes timer
  return (
    <View>
      <MyTimer expiryTimestamp={time} initTimeSec={sec} setPage={setPage}/>
    </View>
  );
}
