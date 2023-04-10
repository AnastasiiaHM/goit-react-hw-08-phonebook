import { Filter } from '../../components/Filter/Filter';
import { AddContactForm } from '../../components/AddContactForm/AddContactForm';
import { Contacts } from '../../components/Contacts/Contacts';

import { Container, ContactsWrap } from '../myContacts/MyContacts.styled';

export const MyContacts = () => {
  return (
    <ContactsWrap>
      <AddContactForm />
      <Container>
        <Filter />
        <Contacts />
      </Container>
    </ContactsWrap>
  );
};
