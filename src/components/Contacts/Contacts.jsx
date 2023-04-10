import { Item } from './ContactsItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redax/selectors';
import { fetchAllContacts, fetchDeleteContact } from '../../redax/operations';

export const Contacts = () => {
  const contactsList = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return contactsList.length <= 0 ? (
    <p>There are no contacts yet</p>
  ) : (
    <ol>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={removeContact} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};
