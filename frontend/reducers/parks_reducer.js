import { RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_PARK:
            nextState[action.park.id] = action.park
            return nextState;
            
        // case RECEIVE_ALL_TRAILS:
        //     nextState[action.trails.park_id] = action.trails
        //     return nextState;
    
        default:
            return state;
    }
}

export default parksReducer;