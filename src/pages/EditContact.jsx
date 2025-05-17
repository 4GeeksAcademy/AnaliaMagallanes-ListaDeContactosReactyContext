import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { contacts, updateContact } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const contact = contacts.find((c) => c.id === id);
    if (contact) setForm(contact);
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(form);
    navigate("/");
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        {["fullName", "email", "phone", "address"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="form-control my-2"
          />
        ))}
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
