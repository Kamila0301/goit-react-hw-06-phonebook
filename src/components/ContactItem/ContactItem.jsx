import { useDispatch } from 'react-redux';
import { deletedContacts } from '../redux/contactSlice';
import { DeleteButton } from './ContactItem.styled';
import { toast } from 'react-toastify';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <p>
      {name}: {number}
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deletedContacts(id));
          toast.success(`Contact "${name}" deleted successfully!`);
        }}
      >
        Delete
      </DeleteButton>
    </p>
  );
};
