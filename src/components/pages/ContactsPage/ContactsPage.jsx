import Form from 'components/modules/form/Form';
import Filter from 'components/modules/filter/Filter';
import Contacts from 'components/modules/contacts/Contacts';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};
export default ContactsPage;
