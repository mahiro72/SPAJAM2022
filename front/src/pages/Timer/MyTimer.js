import React, { useState,useEffect } from "react";

import { Button, View, Text, Dimensions, TouchableHighlight,Image } from "react-native";
import { useTimer } from "react-timer-hook";
import Title from "../../components/TItle";

import SecPeriod from "./SecPeriod";

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


  return (

    <>
    <View>
        <View style={centerStyles.textCenter}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#555",
                marginBottom: 15, 
            }}>
                少しずつ冷えてます
                <SecPeriod seconds={seconds}/>
            </Text>
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
            isRunning && seconds>0
            ?<Button onPress={pause}  title={"pause"} />
            :null
        }
      
        {
            !isRunning && seconds>0
            ?<Button onPress={start}  title={"start"} />
            :null
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

export default MyTimer;