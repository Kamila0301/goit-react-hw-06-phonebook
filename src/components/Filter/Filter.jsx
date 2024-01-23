import { useDispatch } from 'react-redux';
import { filtered } from '../redux/filterSlice';
import { InputStyled, LabelStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <LabelStyled>
      <h2>Find contacts by name</h2>
      <InputStyled
        type="text"
        name="text"
        onChange={event => dispatch(filtered(event.target.value))}
      />
    </LabelStyled>
  );
};
