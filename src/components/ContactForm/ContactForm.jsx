import { nanoid } from 'nanoid';

const ContactForm = ({setState, state}) => {

    const addCantact = (event) => {
        event.preventDefault();
        const newName = event.currentTarget[0].value;
        const number = event.currentTarget[1].value;
    
        if (state.contacts.filter(({name}) => name.toLowerCase() === newName.toLowerCase()).length > 0) {
            alert(`${newName} is already in contacts`);
            return;
        }

        const data = {
          id: nanoid(),
          name: newName,
          number: number
        }
    
        setState({...state, contacts: [...state.contacts, data]})
      }

    return (
        <>
            <form className='phonebook' onSubmit={addCantact}>
                <div className="formGroup">
                <label style={{display: 'block'}}>Name</label>
                <input className='input' type="text" name="name" required id="name"/>
                </div>
                <div className="formGroup">
                <label style={{display: 'block'}}>Number</label>
                <input className='input' type="tel" name="number" id="number" required/>
                </div>
                <button className='button' type="submit">Add contact</button>
            </form>
        </>
    )
}

export default ContactForm