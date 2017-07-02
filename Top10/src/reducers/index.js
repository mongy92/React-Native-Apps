import {combineReducers} from 'redux';
import ShowAllMovies from './ShowAllMovies';
import ShowAllSeries from './ShowAllSeries';
export default combineReducers({
    movies : ShowAllMovies,
    series : ShowAllSeries
});