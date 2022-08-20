import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Select from './src/pages/Select/Select';
import Top from './src/pages/Top/Top';
import Timer from './src/pages/Timer/Timer';
import Feedback from './src/pages/Feedback/Feedback';

// 警告の削除
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Setting a timer",
]);

// style
import styles from './styles/App.style';

export default function App() {
  const [page, setPage] = useState("top")
  return (
    <View style={styles.container}>
      {
        page==="top" 
        ?<Top setPage={setPage}/> 
        :null
      }
      {
        page==="select"
        ?<>
          <Select />
          <Button onPress={()=>{setPage("timer")}} title={"next"} />
          <Button onPress={()=>{setPage("top")}} title={"back"} />
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
        ?<Feedback setPage={setPage}/>
        :
        null
      }
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
