import React,{Component} from 'react' ;
import {connect} from 'react-redux';
import {ListView,View} from 'react-native' ;
import ListItem from './ListItem';

class ShowMovies extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.movies);

    }

    renderRow(show){
        return <ListItem show={show} />
    }


    render(){
        console.log(this.props.movies)
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
             />
        );
    }
}

const mapStateToProps = (state) =>{

    return {movies: state.movies};
} 

export default connect(mapStateToProps)(ShowMovies);