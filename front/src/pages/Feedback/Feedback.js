import React,{useState,useEffect} from 'react';
import { TouchableHighlight, Text, Image, View} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Button from '../../components/Button';


import circleStyles from '../../../styles/common/Circle.style';
import positionStyles from '../../../styles/common/Position.style';
import fontStyles from '../../../styles/common/Font.style';
import SecTitle from '../../components/SecTitle';
import SecFeedback from './SecFeedback';

const Feedback = ({setPage,drinkId}) => {
    const [nowEmotion,setNowEmotion] = useState("");

    const getStatus = ()=>{
        if (nowEmotion==="cold"){
            return "down"
        }
        else if (nowEmotion==="hot"){
            return "up"
        }
    }
    const updateBest = ()=>{
        fetch(`http://localhost:8080/drink/update?id=${drinkId}&status=${getStatus()}`,{"method":"PUT"})
    }
    
    return (
        <View>
            <SecTitle title={"Feedback"}/>
            <TouchableHighlight
                style = {[circleStyles.feedbackCircle]}
                underlayColor = '#ccc'
            >
            <View style={{margin:40}}>
                <Text style={fontStyles.feedbackText}>
                    冷え具合はどうでしたか?{"\n"}以下の3つから選んでください!
                </Text>
                <View>
                    <RadioButton.Item
                        value="cold"
                        label="つめたい 🥶"
                        style={{color:"#000"}}
                        status={ nowEmotion === 'cold' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("cold")}
                    />
                    <RadioButton.Item
                        value="normal"
                        label="さいこう！！ 😊"
                        status={ nowEmotion === 'normal' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("normal")}
                    />
                    <RadioButton.Item
                        value="hot"
                        label="ぬるい 🥵"
                        status={ nowEmotion === 'hot' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("hot")}
                    />
                </View>
            </View>
            </TouchableHighlight>
            <Button onPress={()=>{updateBest();setPage("top")}}  title={"topに戻る"} />
        </View>
    )
}

export default Feedback