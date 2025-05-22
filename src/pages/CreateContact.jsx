import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const [newContact, setNewContact] = useState({name:"", phone:"", email:"", address:""});
    const {store, dispatch, createContact, getContacts} =useGlobalReducer()
    const navigate = useNavigate();

    const handleCreateNewContact = (e) => {
        e.preventDefault();
        createContact(newContact)
        getContacts(dispatch)    
        navigate("/")
    }
    return (
        <div className="input">
            <div className="text-center mt-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input
                        onChange={(e) => setNewContact({...newContact, name: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                    <input
                        onChange={(e) => setNewContact({...newContact, phone: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">email</span>
                    <input
                        onChange={(e) => setNewContact({...newContact, email: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        ria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                    <input
                        onChange={(e) => setNewContact({...newContact, address: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <button 
                    onClick={(e) => handleCreateNewContact(e)}
                    type="submit"
                    className="btn btn-success">
                        Post
                </button>
            </div>
        </div>
        
    );
}; 