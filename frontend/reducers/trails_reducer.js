import { RECEIVE_TRAIL } from "../actions/trail_actions";
import { RECEIVE_ALL_TRAILS } from "../actions/park_actions";

const trailsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_TRAIL:
            nextState[action.trail.id] = action.trail
            return nextState;

        case RECEIVE_ALL_TRAILS:
            action.trails.forEach(trail => nextState[trail.id] = trail)
            return nextState;
    
        default:
            return state;
    }
}

export default trailsReducer;