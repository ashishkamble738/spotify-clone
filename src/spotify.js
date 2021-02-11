// https://developers.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "https://spotify-clone-1c596.web.app"

const clientId = "eae614a39cfc4aba9b4869729b8f87ac"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=ashish
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1]) //mysupersecretkey

            return initial
        }, {})
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true `







