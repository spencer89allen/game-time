//test account is test@thenetnija.co.uk and test1234

//Section 1 - create initial state for the reducer
const initialState = {
    user: null,
    authError: null
}


//Section 2 - create action types
//figure out why these are not being used

// const LOGIN_SUCCESS = 'LOGIN_SUCCESS' ;

// const LOGIN_ERROR = 'LOGIN_ERROR';

// const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// const REGISTER_ERROR = 'REGISTER_ERROR';


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

export function logout() {
    return( dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'})
        });
    }
}

export function register(newUser) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
            })
        }).then(() => {
            dispatch({ type: 'REGISTER_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'REGISTER_ERROR', err })
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
        case 'LOGOUT_SUCCESS':
            console.log('Logout Success');
            return state;
        case 'REGISTER_SUCCESS':
            console.log('Register Success')
            return { ...state, authError: null};
        case 'REGISTER_ERROR':
            console.log('Register Error')
            return { ...state, authError: action.err.message}
        default:
            return state;
    }
}