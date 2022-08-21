import React from 'react'
import { Dimensions, TouchableHighlight, Text, Image } from 'react-native';

import girlImg from '../../../image/top/girl.png'

const Icon = () => {
  return (
    <>
        <TouchableHighlight
            style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.60,
                height: Dimensions.get('window').width * 0.60,
                backgroundColor:'#fff',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            underlayColor = '#ccc'
        >
            <Image 
                style={{height: 200,width:200}}
                resizeMode='contain'
                source={girlImg} 
            />
        </TouchableHighlight>
    </>
  )
}

export default Icon