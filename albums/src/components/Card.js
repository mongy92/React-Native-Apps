import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};

const styles= {
     containerStyles : {
         borderWidth:1,
         borderRadius:2,
         borderColor:'#ddd',
         marginTop:10,
         marginLeft:5,
         marginRight:5,
         elevation:1,


    }

}

export default Card;