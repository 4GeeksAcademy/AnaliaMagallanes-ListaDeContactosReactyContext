import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const UpdateContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentContact, setCurrentContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const { store, dispatch, updateContact, getContacts } = useGlobalReducer();

    useEffect(() => {
        getContacts(); // carga los contactos
    }, []);

    useEffect(() => {
        const contact = store.contacts?.find((c) => c.id === parseInt(id));
        if (contact) {
            setCurrentContact(contact);
        }
    }, [store.contacts, id]);

    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(currentContact);
        getContacts(); // vuelve a cargar contactos actualizados
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Actualizar contacto</h2>
            <form onSubmit={handleUpdateContact}>
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input
                        type="text"
                        className="form-control"
                        value={currentContact.name}
                        onChange={(e) =>
                            setCurrentContact({ ...currentContact, name: e.target.value })
                        }
                        aria-label="Name"
                        aria-describedby="name-input"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Phone</span>
                    <input
                        type="text"
                        className="form-control"
                        value={currentContact.phone}
                        onChange={(e) =>
                            setCurrentContact({ ...currentContact, phone: e.target.value })
                        }
                        aria-label="Phone"
                        aria-describedby="phone-input"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input
                        type="email"
                        className="form-control"
                        value={currentContact.email}
                        onChange={(e) =>
                            setCurrentContact({ ...currentContact, email: e.target.value })
                        }
                        aria-label="Email"
                        aria-describedby="email-input"
                    />
                </div>
                <div className="input-group mb-4">
                    <span className="input-group-text">Address</span>
                    <input
                        type="text"
                        className="form-control"
                        value={currentContact.address}
                        onChange={(e) =>
                            setCurrentContact({ ...currentContact, address: e.target.value })
                        }
                        aria-label="Address"
                        aria-describedby="address-input"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success">
                        Actualizar Contacto
                    </button>
                </div>
            </form>
        </div>
    );
};

