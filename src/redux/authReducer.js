

//Section 1 - create initial state for the reducer
const initialState = {
    user: null,
    authError: null
}


//Section 2 - create action types

const LOGIN_SUCCESS = 'LOGIN_SUCCESS' ;

const LOGIN_ERROR = 'LOGIN_ERROR';


//Section 3 - create action-creators
//check video 17 for stuff

//login action creator
export function login(user) {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
        
    }
}



//Section 4 - create the reducer function
export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Failed')
            return { ...state, authError: 'Login Failed'}
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return { ...state, authError: null }
        default:
            return state;
    }
}