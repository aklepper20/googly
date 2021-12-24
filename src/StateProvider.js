import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

//higher order component. Children is the app.
//pass reducer and state
//initialState is what that data layer looks like before the app changes
//reducer listtens for any changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//hook, allows us tot pull info from the data layer
export const useStateValue = () => useContext(StateContext);
