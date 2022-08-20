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
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').width * 0.30,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin:7,
    }
});

export default circleStyles;