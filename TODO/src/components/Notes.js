import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Notes extends Component{

    render(){
        const {value,deleteNote} = this.props;
        const {note,noteText,deleteButton,deleteButtonText}= styles;
        return(
            <View style={note}>
                    <Text style={noteText}>{value.date}</Text>
                    <Text style={noteText}>{value.note}</Text>

                    <TouchableOpacity style={deleteButton} onPress={deleteNote}>
                        <Text style={deleteButtonText}>X</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#007aff'
    },
    deleteButton:{
        position:'absolute',
        backgroundColor:'#e04e4e',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    deleteButtonText:{
        color:'white',
        fontWeight:'bold'

    }
}

export default Notes;

