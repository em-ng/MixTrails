export const signUp = user => {
    return $.ajax({
        method: 'post',
        url: '/api/users',
        data: {user: user}
    })
}

export const login = user => {
    return $.ajax({
        method: 'post',
        url: '/api/session',
        data: {user: user}
    })
}

export const logout = () => {
    return $.ajax({
        method: 'delete',
        url: '/api/session'
    })
}