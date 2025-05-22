import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdateContact = () => {

    const {id} = useParams(); 
    const [currentContact, setCurrentContact] = useState({name:"", phone:"", email:"", address:""});
    const {store, dispatch, updateContact, getContacts} =useGlobalReducer()
    const navigate = useNavigate();

    useEffect(() => {
        getContacts();
    }, []);

    useEffect(() => {
        let contact = store.contacts?.filter((contact, index) => {return contact.id == id})
        console.log(contact);
        if(contact.length > 0){
            setCurrentContact(contact[0])
        }        
    }, [store.contacts]);

    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(currentContact)
        getContacts(dispatch)    
        navigate("/")
    }


    return (
        
        <div className="input">
            <div className="text-center mt-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                    <input
                        onChange={(e) => setCurrentContact({...currentContact, name: e.target.value})} 
                        placeholder={currentContact?.name}
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                    <input
                        onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})} 
                        placeholder={currentContact?.phone}
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">email</span>
                    <input
                        onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})} 
                        placeholder={currentContact?.email}
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        ria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Direccion</span>
                    <input
                        onChange={(e) => setCurrentContact({...currentContact, address: e.target.value})}
                        placeholder={currentContact?.address}
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <button 
                    onClick={(e) => handleUpdateContact(e)}
                    type="submit"
                    className="btn btn-success">
                        Actualizar contacto
                </button>
            </div>
        </div>
    );
}; 