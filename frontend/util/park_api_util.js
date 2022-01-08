export const fetchPark = parkId => {
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}`
    })
}

export const fetchTrails = parkId => {
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}/trails`
    })
}