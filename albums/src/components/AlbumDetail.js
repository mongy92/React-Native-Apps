import React from 'react';
import {Text, View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Botton from './Botton';

const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url} = album;
    const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri : thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                 </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{uri : image}}/>
            </CardSection>

            <CardSection>
                <Botton  onPress = { () => Linking.openURL(url)}>
                    Buy Now
                </Botton>
            </CardSection>
        </Card>
        
    );
};
const styles = {
    headerContentStyle :{
        flexDirection : 'column',
        justifyContent : 'space-around',
    },
    thumbnailStyle : {
        width:50,
        height:50,
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10,
        marginLeft : 10,
    },
    headerTextStyle : {
        fontSize : 18,
        color:'black'
    },
    imageStyle : {
        height : 300,
        flex : 1,
        width : null,
    }
};

export default AlbumDetail;