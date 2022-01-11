export const fetchPark = parkId => {
    // debugger
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}`
    })
}

export const fetchTrails = parkId => {
    // debugger
    return $.ajax({
        method: 'get',
        url: `/api/parks/${parkId}/trails`
    })
}