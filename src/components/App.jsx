import { useState } from "react";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'

export const App = () => {

  const [state, setState] = useState(
    {
      contacts: [],
      filter: '',
    }
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm setState={setState} state={state}/>
      <h2>Contacts</h2>
      <Filter setState={setState} state={state}/>
      <ContactList setState={setState} state={state}/>
    </div>
  );
};
