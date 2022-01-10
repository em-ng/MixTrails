import { connect } from 'react-redux';
import { fetchPark, fetchTrails } from '../../actions/park_actions';
import ParkShow from './park_show';

const mSTP = (state, ownProps) => {
    return {
        park: state.entities.parks[ownProps.match.params.parkId],
        trails: state.entities.trails
    }
}

const mDTP = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchTrails: parkId => dispatch(fetchTrails(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow);