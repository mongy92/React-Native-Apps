import React,{Component} from 'react';
import {TouchableWithoutFeedback,View,Text,Linking,Image} from 'react-native';
import{CardSection,Card,Button} from './common';
import {connect} from 'react-redux';

class ListItem extends Component{

    render(){
        const {titleStyle, imageStyle} = styles;
        const {title,img,url} = this.props.show;
        return(
            <Card>
                    <CardSection style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>

                    <CardSection>
                        <Image style={imageStyle} source={{uri : img}}/>
                    </CardSection>

                    <CardSection>
                        <Button  onPress = { () => Linking.openURL(url)}>
                             Visit on imdb
                        </Button>
            </CardSection>
            </Card>
        );

    }
}

const styles = {
    titleStyle : {
        fontSize : 18,
        color:'black',
        paddingLeft:15,
        paddingTop:5,
        paddingBottom:10
    },
    imageStyle : {
        height:430,
        alignSelf:'stretch',
        flex : 1,
        width : null,
    }
}


export default ListItem;