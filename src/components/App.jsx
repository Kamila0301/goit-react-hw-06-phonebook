import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SectionPhonebook, SectionContact, SectionItem } from './App.styled';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <SectionPhonebook>
        <SectionItem>Phonebook</SectionItem>
        <ContactForm />

        <SectionContact>Contacts</SectionContact>
        <Filter />
        <ContactList />
      </SectionPhonebook>
      <ToastContainer />
    </>
  );
};
