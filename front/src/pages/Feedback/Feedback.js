import React from 'react';
import { TouchableHighlight, Text, Image, View,Button } from 'react-native';

import circleStyles from '../../../styles/common/Circle.style';
import positionStyles from '../../../styles/common/Position.style';
import fontStyles from '../../../styles/common/Font.style';
import SecTitle from '../../components/SecTitle';
import SecFeedback from './SecFeedback';

const Feedback = ({setPage}) => {
    const [nowSelect,setNowSelect] = useState(null)

    
    return (
        <View>
            <SecTitle title={"Feedback"}/>
            <TouchableHighlight
                style = {[circleStyles.feedbackCircle]}
                underlayColor = '#ccc'
            >
            <View style={{margin:30}}>
                <Text style={fontStyles.drinkText}>
                    冷え具合はどうでしたか?{"\n"}以下の3つから選んでください!
                </Text>
                <View style={positionStyles.flex}>
                    <Text style={{margin:10}}>残念だった...</Text>
                    <SecFeedback text={"残念だった..."} emotion={"😥"} isSelect={true}/>
                    <Text style={{margin:10}}>ちょうどいい</Text>
                    <Text style={{margin:10}}>最高！！</Text>
                </View>
            </View>
            </TouchableHighlight>
            <Button onPress={()=>{setPage("top")}}  title={"topに戻る"} />
        </View>
    )
}

export default Feedback