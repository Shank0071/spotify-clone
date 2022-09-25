export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: false,
    // Remove after developing
    // token: "BQBGcoNZ_p5fDUwAPlxbn4R82dqJfedA-PSQZAknM_43rEltYoW5I8prRaNpdjDfePUhFgKBlAoKeHCrh8I9kQoQ-a8EW_fORlH-4TrTp0qL-suCOAtSLM_Dptju6gD2u89ZfIVmktqMyZcjbDxgdjqID9HoFfHcQuAsdbFsaE2DqmVIQmJwyQu8XkB8XpQ40odjpDwEUacWME7kFvY7"

}

const reducer = (state, action) => {
    console.log(action)
    // Action --> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer

