import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Botton = ({onPress,children}) => {
    const {bottonStyle,textStyle} = styles;
    return(
        <TouchableOpacity onPress={onPress} style = {bottonStyle}>
            <Text style = {textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    bottonStyle :{
        flex :1,
        alignSelf:'stretch',
        backgroundColor : '#fff',
        borderWidth:1,
        borderColor:'#007aff',
        borderRadius:5,
        marginLeft:5,
        marginRight:5,
    },
    textStyle :{
        fontSize : 18,
        fontWeight:'600',
        alignSelf : 'center',
        color : '#007aff',
        paddingTop:10,
        paddingBottom:10,
    }
};

export default Botton;