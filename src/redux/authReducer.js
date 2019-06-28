//Section 1 - create initial state forr the counter reducer
const initialState = {
    user: null,
}

//Section 2 - create action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

//Section 3 - create action-creators
export function login(username) {
    return {
        type: LOGIN,
        payload: username,
    };
};

export function logout() {
    return {
        type: LOGOUT
    }
}

export function register(something) {
    return {
        type: REGISTER,
        payload: something,
    }
}

//Section 4 - create the reducer function
export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            console.log('Login Success')
            return Object.assign( {}, state, {user: action.payload});
        case LOGOUT:
            console.log('Logout Success')
            return Object.assign( {}, state, {user: null});
        case REGISTER:
            return Object.assign( {}, state, {});
        default:
            return state;
    }
}