import { connect } from 'react-redux';
import { fetchPark } from '../../actions/park_actions';
import ParkShow from './park_show';

const mSTP = (state, ownProps) => {
    return {
        park: state.entities.parks[ownProps.match.params.id],
        trails: Object.values(state.entities.trails)
    }
}

const mDTP = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow);