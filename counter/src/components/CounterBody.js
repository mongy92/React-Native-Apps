import React from 'react';
import {View , Text} from 'react-native';

const CounterBody = ({number}) =>{
    const {counterViewStyle,counterTextStyle} = styles;
    return (
        <View style={counterViewStyle}>
                    <Text style={counterTextStyle}>{number}</Text>
        </View>
        );
}
const styles = {
    counterViewStyle :{
        flex:1,
        padding:50,
        borderRadius:50,
        backgroundColor:'#474645',
        justifyContent:'center',
        alignItems:'center',
    },
    counterTextStyle : {
        color:'white',
        fontSize:50,
    }
};
export default CounterBody;

