import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledError,
  StyledField,
  AddButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { getContacts } from '../redux/selectors';

import { toast } from 'react-toastify';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches("^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$")
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
    )
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      actions.resetForm();
      toast.success(`Contact ${values.name} added successfully!`);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleAddContact}
      >
        <StyledForm>
          <label>
            Name
            <StyledField name="name" />
            <StyledError name="name" />
          </label>

          <label>
            Phone Number
            <StyledField name="number" />
            <StyledError name="number" />
          </label>

          <AddButton type="submit">Add contact</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
