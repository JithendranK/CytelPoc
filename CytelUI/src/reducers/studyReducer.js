const initState = {
    count: 0,
    studies: [],
}

const globalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_STUDIES': {
            return { ...state, studies: action.studies }
        }
        default:
            return state
    }
}

export default globalReducer
