import React from 'react';
import {View , Text , TextInput} from 'react-native';

const UserInput = ({label, onChangeText,value,placeholder,secureTextEntry}) =>{

    const {labelStyle,inputStyle,containerStyle} = styles;

    return(
        <View style={containerStyle}> 
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect = {false}
                placeholder = {placeholder}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
                />
        </View>
    );
}

const styles  = {
    labelStyle :{
        fontSize:18,
        flex:1,
        paddingLeft:20
    },
    inputStyle :{
        flex:2,
        fontSize:18,
        lineHeight:23,
        paddingLeft:5,
        paddingRight:5,
        color: '#000',
    },
    containerStyle : {
        flexDirection : 'row',
        height:40,
        flex:1,
        alignItems:'center'
    }
}
export {UserInput};