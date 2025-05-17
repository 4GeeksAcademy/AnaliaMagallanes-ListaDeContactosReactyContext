import React, { useReducer, useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

const initialState = {
  contacts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload),
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (contact) => {
    dispatch({ type: "ADD_CONTACT", payload: { ...contact, id: crypto.randomUUID() } });
  };

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  const updateContact = (contact) => {
    dispatch({ type: "UPDATE_CONTACT", payload: contact });
  };

  useEffect(() => {
    // Simulación de carga inicial
    dispatch({
      type: "SET_CONTACTS",
      payload: [],
    });
  }, []);

  return (
    <GlobalContext.Provider value={{
      contacts: state.contacts,
      addContact,
      deleteContact,
      updateContact
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
