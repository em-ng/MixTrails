import { RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_PARK:
            nextState[action.park.id] = action.park
            return nextState;
    
        default:
            return state;
    }
}

export default parksReducer;