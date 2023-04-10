import { useDispatch, useSelector } from 'react-redux';
import { fetchAddContact } from '../../redax/operations';
import { selectContacts } from '../../redax/selectors';
import { InputField } from '../shared/InputField/InputField';
import { Btn } from '../shared/Button/Button';
import fields from 'components/shared/InputField/fields';
import { StyledForm } from './AddContactForm.styled';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isContactExist = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (isContactExist(name)) {
      form.reset();
      return alert(`${name} is already in Contacts`);
    }
    const data = { name, number };
    dispatch(fetchAddContact(data));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputField {...fields.contactName} />
      <InputField {...fields.number} />
      <Btn type={'submit'} btnName={'Add contact'} />
    </StyledForm>
  );
};
