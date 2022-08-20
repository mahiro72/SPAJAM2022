import React,{useState} from 'react';
import { TouchableHighlight, Text, Image, View,Button} from 'react-native';
import { RadioButton } from 'react-native-paper';

import circleStyles from '../../../styles/common/Circle.style';
import positionStyles from '../../../styles/common/Position.style';
import fontStyles from '../../../styles/common/Font.style';
import SecTitle from '../../components/SecTitle';
import SecFeedback from './SecFeedback';

const Feedback = ({setPage}) => {
    const [nowEmotion,setNowEmotion] = useState("");
    
    return (
        <View>
            <SecTitle title={"Feedback"}/>
            <TouchableHighlight
                style = {[circleStyles.feedbackCircle]}
                underlayColor = '#ccc'
            >
            <View style={{margin:40}}>
                <Text style={fontStyles.drinkText}>
                    冷え具合はどうでしたか?{"\n"}以下の3つから選んでください!
                </Text>
                <View>
                    <RadioButton.Item
                        value="cold"
                        label="cold"
                        style={{color:"#000"}}
                        status={ nowEmotion === 'cold' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("cold")}
                    />
                    <RadioButton.Item
                        value="normal"
                        label="normal"
                        status={ nowEmotion === 'normal' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("normal")}
                    />
                    <RadioButton.Item
                        value="hot"
                        label="hot"
                        status={ nowEmotion === 'hot' ? 'checked' : 'unchecked' }
                        onPress={() => setNowEmotion("hot")}
                    />
                </View>
            </View>
            </TouchableHighlight>
            <Button onPress={()=>{setPage("top")}}  title={"topに戻る"} />
        </View>
    )
}

export default Feedback