import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View,ImageBackground } from 'react-native';
import Select from './src/pages/Select/Select';
import Top from './src/pages/Top/Top';
import Timer from './src/pages/Timer/Timer';
import Feedback from './src/pages/Feedback/Feedback';

import bgImg from "./image/bg.png"

// 警告の削除
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Setting a timer",
]);

// style
import styles from './styles/App.style';

export default function App() {
  const [page, setPage] = useState("top")
  const [drinkId,setDrinkId] = useState(1)
  return (
    <ImageBackground 
      style={{
        justifyContent: "center",
        flex:1
      }}
      source={bgImg} resizeMode="cover">
    <View style={styles.container}>
      {
        page==="top" 
        ?<Top setPage={setPage}/> 
        :null
      }
      {
        page==="select"
        ?<>
          <Select setPage={setPage} setDrinkId={setDrinkId} drinkId={drinkId}/>
        </>
        :null
      }
      {
        page==="timer"
        ?<Timer setPage={setPage}/>
        :
        null
      }
      {
        page==="feedback"
        ?<Feedback setPage={setPage} drinkId={drinkId}/>
        :
        null
      }
      {/* <StatusBar style="auto" /> */}
    </View>
    </ImageBackground>
  );
}
