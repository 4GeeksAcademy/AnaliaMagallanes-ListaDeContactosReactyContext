import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const {store, dispatch, fetchAgenda} =useGlobalReducer();
  const [contacts, setContacts] = useState([]);

  useEffect (() => {
	fetchAgenda();
  }, [])

  useEffect (() => {
	setContacts(store.contacts);
  }, [store.contacts])

  console.log(contacts);
  

	return (
		<div className="text-center mt-5">
			{
				contacts?.length > 0 
				
				? contacts.map((contact, index) => {
					return (
						<ContactCard key={index} contact={contact} />
					);
				})				
				: <h1> You need contacts, babe</h1>
			}
			<div className="ml-auto mt-5">
				<Link className="btn btn-success mx-2" to={"/Create"}>Create Contact</Link>			
			</div>
		</div>
		
	);
}; 
