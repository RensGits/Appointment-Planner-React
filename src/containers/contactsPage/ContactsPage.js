import React,  {useState,useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js';
import {TileList} from '../../components/tileList/TileList.js';


export const ContactsPage = (props) => {
  
  const[currentName,setCurrentName] = useState('');
  const[currentEmail,setCurrentEmail] = useState('');
  const[currentPhone, setCurrentPhone] = useState('');
  const[duplicate,setDuplicate] = useState(false);


  useEffect(
    () => {
      for(let i = 0; i < props.contacts.length; i++ ){
        if(props.contacts[i].name === currentName){
          setDuplicate(true);
        }
        else setDuplicate(false);

      }
    }, [props.addContact, currentName, props.contacts]
  )
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      props.addContact(currentName,currentEmail,currentPhone);
     
    }
    else{
      alert('A contact with this name has already been added. Please check if the contact list already contains your contact or if you made any spelling errors.')
     
      setCurrentName('');
      setCurrentEmail('');
      setCurrentPhone('');
      
      setDuplicate(false);
    }
  };



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
            currentName = {currentName} 
            currentEmail = {currentEmail} 
            currentPhone = {currentPhone} 
            setCurrentName = {setCurrentName} 
            setCurrentEmail = {setCurrentEmail} 
            setCurrentPhone = {setCurrentPhone}
            handleSubmit = {handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList style = {{border: 'solid 1px red', height: '100px', width: '200px'}} data = {props.contacts}/>
      </section>
    </div>
  );
};
