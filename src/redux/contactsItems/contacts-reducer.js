import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContacts]: (state, { payload }) => [...state, payload],
  [actions.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.searchContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
