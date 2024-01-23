import { useDispatch, useSelector } from 'react-redux';
import { resetContact } from '../redux/contactSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getFilter } from '../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ResetButton, UlStyled } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = filtered();

  const handleResetContact = () => {
    if (contacts.length >= 1) {
      dispatch(resetContact());
      toast.success('Contacts updated successfully!');
    }
  };

  return (
    <UlStyled>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <ContactItem {...item} />
        </li>
      ))}
      <ResetButton type="button" onClick={handleResetContact}>
        Reset
      </ResetButton>
    </UlStyled>
  );
};
