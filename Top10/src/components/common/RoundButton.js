import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundButton = ({ onPress, children,style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[buttonStyle,style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
        height:150,
        width:150,
        borderRadius:150,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:16,
        borderColor:'rgba(0,0,0,0.4)'
  }
};

export { RoundButton };