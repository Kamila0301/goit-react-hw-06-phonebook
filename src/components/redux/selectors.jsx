// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

// export const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filters) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );
