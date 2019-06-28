import { createStore, combineReducers } from 'redux';

import authReducer from './authReducer';

var reducers = combineReducers({ authReducer });

export default createStore(reducers);

