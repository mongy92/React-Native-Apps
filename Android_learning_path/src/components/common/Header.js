//The Header Component

//import Liberaries
import React from 'react';
import {Text,View} from 'react-native';

//Create Header Component

const Header = (props) =>{
  const {textStyle,viewStyle} = styles;
  return(
  <View style = {viewStyle}>
    <Text style = {textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  textStyle : {
    fontSize : 23,
    color : 'white',
    fontWeight:'bold'
  },
  viewStyle :{
    backgroundColor :'#88ba00',
    justifyContent : 'center',
    alignItems : 'center',
    height :60,
    padding : 15,
    elevation:2,
    position :'relative'
  },
};

export {Header} ;