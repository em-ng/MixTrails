import { connect } from 'react-redux';
import { fetchParks } from '../../actions/park_actions';
import SearchBar from './search_bar';

const mSTP = state => {
    return {
        parks: state.entities.parks
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchParks: () => dispatch(fetchParks())
    }
}
export default connect(mSTP, mDTP)(SearchBar);