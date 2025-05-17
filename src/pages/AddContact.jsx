import React, { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const { addContact } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add a new contact</h2>
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
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default AddContact;
