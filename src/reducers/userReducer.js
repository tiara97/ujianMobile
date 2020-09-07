import { LOG_IN, LOG_OUT,  LOG_IN_START, LOG_IN_END, LOG_IN_ERROR, KEEPLOGIN, KEEPLOGIN_START, KEEPLOGIN_END, } from '../actions'

const INITIAL_STATE = {
    username: '',
    loading: false,
    error: '',
    loadingAuth: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                username: action.payload,
            }
        case LOG_IN_START:
            return { ...state, loading: true }
        case LOG_IN_END:
            return { ...state, loading: false }
        case LOG_IN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case LOG_OUT:
            return INITIAL_STATE
        case KEEPLOGIN_START:
            return { ...state, loadingAuth: true }
        case KEEPLOGIN_END:
            return { ...state, loadingAuth: false }
        default:
            return state
    }
}
export default userReducer