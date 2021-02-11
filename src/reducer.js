export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing......
    // token: "BQBz14w9vn-jTcjOvMFGbgyvAW-qOtspvfyzCpRwz9hnIJfS0pjhLG3sLMGlaic0seC_UzIWNc71XNW3va27-hQytkQOYofB521zQUHAz2-VWnJ3WNBDe7Lk6mAdA9gWxM6Vn1huK2DZ7VsR7E3HSMErGfCE4aPlVhrfumS5TlxKE6j_jEYX",
}

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
    }
}

export default reducer



