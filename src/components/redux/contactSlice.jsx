import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const defaultContacts = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            ...values,
          },
        };
      },
    },

    deletedContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    resetContact() {
      return defaultContacts;
    },
  },
});

export const { addContact, deletedContacts, resetContact } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
