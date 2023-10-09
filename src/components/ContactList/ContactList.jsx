const ContactList = ({contacts, onDeleteContact }) => {
  return (
    <>
      <ul className="list">
        {contacts.map(({id, name, number}) => {
          return (
            <li key={id}>
              <span>{name}</span>: <span>{number}</span> <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactList