import React,{Component} from 'react' ;
import {connect} from 'react-redux';
import {ListView,View} from 'react-native' ;
import ListItem from './ListItem';

class ShowSeries extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.series);

    }

    renderRow(show){
        return <ListItem show={show} />
    }


    render(){
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
             />
        );
    }
}

const mapStateToProps = (state) =>{
    
    return {series: state.series};
} 

export default connect(mapStateToProps)(ShowSeries);