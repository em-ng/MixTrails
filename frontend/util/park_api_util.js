export const fetchPark = parkId => {
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}`
    })
}

export const fetchAllTrails = parkId => {
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}/trails`
    })
}