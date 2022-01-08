import * as ParkAPIUtil from '../util/park_api_util';

export const RECEIVE_PARK = 'RECEIVE_PARK';
// export const RECEIVE_ALL_TRAILS = 'RECEIVE_ALL_TRAILS';

const receivePark = park => {
    return {
        type: RECEIVE_PARK,
        park: park
    }
}

// const receiveTrails = trails => {
//     return {
//         type: RECEIVE_ALL_TRAILS,
//         trails: trails
//     }
// }

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
      .then(park => dispatch(receivePark(park)))
}

// export const fetchTrails = parkId => dispatch => {
//     return ParkAPIUtil.fetchTrails(parkId)
//       .then(trails => dispatch(receiveTrails(trails)))
// }