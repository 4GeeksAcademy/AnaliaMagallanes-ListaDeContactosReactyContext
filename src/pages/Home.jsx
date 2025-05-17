import React from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const Home = () => {
  const { contacts, deleteContact } = useGlobalContext();

  return (
    <div className="container">
      <h1>Contact List</h1>
      <Link to="/add">Add Contact</Link>
      {contacts.map((contact) => (
        <div key={contact.id} className="card my-2 p-3">
          <h5>{contact.fullName}</h5>
          <p>📧 {contact.email}</p>
          <p>📞 {contact.phone}</p>
          <p>📍 {contact.address}</p>
          <Link to={`/edit/${contact.id}`}>✏️ Edit</Link>
          <button onClick={() => deleteContact(contact.id)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
