import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import LoginModule from '../modules/LoginModule';
import WriteModule from '../modules/WriteModule';

const store = configureStore({
  reducer: {
    LoginModule,
    WriteModule,
  },
});

export default store;
