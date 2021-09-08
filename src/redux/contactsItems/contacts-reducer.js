import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  searchContacts,
  deleteContactError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) =>
    payload.sort((a, b) => a.name.localeCompare(b.name)),
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [searchContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
