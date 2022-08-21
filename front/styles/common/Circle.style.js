import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';


const circleStyles = StyleSheet.create({
    iconCircle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.60,
        height: Dimensions.get('window').width * 0.60,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drinkCircle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').width * 0.30,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin:7,
    },
    timerCircle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').width * 0.90,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin:7,
    },
    feedbackCircle:{
        borderRadius: 60,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin:7,
    },
});

export default circleStyles;