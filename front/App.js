import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Top from './src/pages/Top/Top';

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
        page!=="top"
        ?
        <>
          <Button onPress={()=>{setPage("top")}} title={"back"} />
        </>
        :null
      }
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
