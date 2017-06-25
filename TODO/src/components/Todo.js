import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import Notes from './Notes';
import UserInput from './UserInput';

class Todo extends Component{

    state = {
        allNotes:[],
        oneNote:''
    };

    componentDidMount = () => {
        AsyncStorage.getItem('allNotes').then((value) => {this.setState({'data': value});
      });
       }
    render(){
        const {scrollContainer,footer,addButton,addButtonText} = styles;
        return(
            <View style={{flex:1}}>

                <ScrollView style={scrollContainer}>
                    {this.renderNotes()}
                </ScrollView>

                <View style={footer}>
                    <TouchableOpacity style={addButton} onPress={this.addNote.bind(this)}>
                        <Text style={addButtonText}>+</Text>
                    </TouchableOpacity>

                    <UserInput
                        onChangeText={oneNote => this.setState({oneNote})}
                        value = {this.state.oneNote}/>
                </View>
            </View>
        );
    }

    renderNotes(key){
        return this.state.allNotes.map((note,key) => 
        <Notes key={key} value={note} deleteNote={()=> this.deleteNote(key)}/>
        );
    }
    addNote(){
        if(this.state.oneNote){
        let d = new Date;
        this.state.allNotes.push({'date': d.getFullYear()+"/"+ (d.getMonth()+1)+'/'+ d.getDate(), 'note':this.state.oneNote});
        this.setState({allNotes:this.state.allNotes})
        this.setState({oneNote:''});
    }else{
        alert("Note is Empty");
    }
}

    deleteNote(key){
        this.state.allNotes.splice(key,1);
        this.setState({allNotes:this.state.allNotes});
    }
}



const styles = {
    scrollContainer:{
        flex:1,
        marginBottom:100
    },
    footer:{
        position:'absolute',
        alignItems:'center',
        right:0,
        left:0,
        bottom:0
    },
    addButton:{
        width:90,
        height:90,
        backgroundColor:'#007aff',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#ccc',
        elevation:8,
        marginBottom: -45,
        zIndex:10

    },
    addButtonText:{
        color: '#fff',
        fontSize:24
    }
}

export default Todo;

