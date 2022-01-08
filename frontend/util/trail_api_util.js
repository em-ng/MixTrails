export const fetchTrail = trailId => {
    return $.ajax({
        method: 'get',
        url: `/api/trails/${trailId}`
    })
}