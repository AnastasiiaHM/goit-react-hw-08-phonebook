import { Form } from 'components/PhoneForm/PhoneForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Container, Title } from './Phonebook.styled';

const Phonebook = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Container>
  );
};
export default Phonebook;
