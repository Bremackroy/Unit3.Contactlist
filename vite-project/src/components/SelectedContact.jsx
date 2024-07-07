import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function getContact() {
        try {
            const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
              );
              const data = await response.json()
              setContact(data)
              console.log(data)
        } catch (error) {
            console.log(error)
        }
     
    }

   getContact();
  }, [selectedContactId]);

  return <div>
    <h3>{contact.name}</h3>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <p>{contact.username}</p>
    <p>{contact.website}</p>
    <button onClick={()=>setSelectedContactId(null)}>Back</button>
  </div>;
}
