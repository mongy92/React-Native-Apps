import React,{Component} from 'react';
import {TouchableWithoutFeedback,View,Text,Linking} from 'react-native';
import{CardSection,Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component{

    renderDescription(){
        const{viewStyle,descriptionStyle,descriptionViewStyle}= styles;
        const {expanded,course}=this.props;
        if(expanded){
            return(
            <View style={viewStyle}>

                <View style ={descriptionViewStyle}>
                    <Text style={descriptionStyle}>
                        {course.description}
                    </Text>
                </View>

                <CardSection>
                    <Button  onPress = { () => Linking.openURL(course.url)}>
                        Visit The Course
                    </Button>
                </CardSection>
            </View>
            )};
    }

    render(){
        const {titleStyle} = styles;
        const {title,id} = this.props.course;
        return(

            <TouchableWithoutFeedback
            onPress={()=> this.props.selectCourse(id)}
            >
                <View>
                    <CardSection>
                        <Text
                            style={titleStyle}
                        >{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        
        );

    }
}

const styles = {
    titleStyle : {
        fontSize : 17,
        color:'black',
        paddingLeft:15,
        paddingTop:5,
        paddingBottom:10
    },
    descriptionStyle : {
        fontSize : 15,
        paddingLeft:10,
        margin:5,
    },
    viewStyle:{
        alignItems:'center',
        justifyContent:'center',
    },
    descriptionViewStyle:{
        padding:5,
        flexDirection :'row',
        justifyContent : 'flex-start',
        position:'relative',
    }

    
}
const mapStateToProps = (state,ownProps) =>{
    const expanded = state.selected === ownProps.course.id;
    return {expanded};
};

export default connect(mapStateToProps,actions)(ListItem);