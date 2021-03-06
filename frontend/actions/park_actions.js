import * as ParkAPIUtil from '../util/park_api_util';

export const RECEIVE_PARK = 'RECEIVE_PARK';
export const RECEIVE_PARKS = 'RECEIVE_PARKS';
// export const CLEAR_PARK = 'CLEAR_PARK';
export const RECEIVE_ALL_TRAILS = 'RECEIVE_ALL_TRAILS';

const receivePark = park => {
    return {
        type: RECEIVE_PARK,
        park: park
    }
}

const receiveParks = parks => {
    return {
        type: RECEIVE_PARKS,
        parks: parks
    }
}

const receiveTrails = trails => {
    return {
        type: RECEIVE_ALL_TRAILS,
        trails: trails
    }
}

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
      .then(park => dispatch(receivePark(park)))
}

export const fetchParks = () => dispatch => {
    return ParkAPIUtil.fetchParks()
      .then(parks => dispatch(receiveParks(parks)))
}

export const fetchTrails = parkId => dispatch => {
    return ParkAPIUtil.fetchTrails(parkId)
      .then(trails => dispatch(receiveTrails(trails)))
}