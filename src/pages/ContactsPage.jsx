import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from 'redux/contactsSlice';
import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';

export const ContactsPage = () => {
  const { data, error, isFetching } = useGetContactsQuery();

  const showContactsSection = contacts => (
    <>
      {contacts.length === 0 ? (
        <p>Your phonebook is empty, add your first contact!</p>
      ) : (
        <>
          <h2>Contacts</h2>
          {contacts.length > 1 ? <Filter /> : null}
          <ContactsList contacts={contacts} />
        </>
      )}
    </>
  );

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      {isFetching && <Loader config={{ height: '48', width: '48' }} />}
      {data && showContactsSection(data)}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};
