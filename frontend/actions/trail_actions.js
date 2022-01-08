import * as TrailAPIUtil from '../util/trail_api_util';

export const RECEIVE_TRAIL = 'RECEIVE_TRAIL';

const receiveTrail = trail => {
    return {
        type: RECEIVE_TRAIL,
        trail: trail
    }
}

export const fetchTrail = trailId => dispatch => {
    return TrailAPIUtil.fetchTrail(trailId)
      .then(trail => dispatch(receiveTrail(trail)))
}