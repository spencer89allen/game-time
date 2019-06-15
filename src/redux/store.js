import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import fbConfig from '../config/fbConfig';


import rootReducer from './rootReducer';

var reducers = combineReducers({ rootReducer })
//additional reducer will be added after a ,

export default createStore(reducers,  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(fbConfig), reactReduxFirebase(fbConfig) ));