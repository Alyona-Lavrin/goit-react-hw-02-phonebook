const ContactList = ({ setState, state }) => {
  const {contacts, filter} = state;

  const filteredContacts = () => {
    let result = contacts
    
    if(filter !== '') {
      result = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    }
    
    return result
  }

  const deleteContact = (deleteId) => {
    const result = contacts.filter(({id}) => id !== deleteId)
    setState({...state, contacts: result})
  }

  return (
    <>
      <ul className="list">
        {filteredContacts().map(({id, name, number}) => {
          return (
            <li key={id}>
              <span>{name}</span>: <span>{number}</span> <button onClick={() => deleteContact(id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactList