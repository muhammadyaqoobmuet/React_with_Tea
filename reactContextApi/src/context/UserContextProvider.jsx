import React from "react";
import UserContext from "./context";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;


/*
user: This is a state variable that holds the user information. Initially, it is set to null, meaning no user is logged in yet.
setUser: This is a function that allows you to update the user state.
Return a Provider Component

<UserContext.Provider>: This is a special React component provided by the context you created (UserContext). 
It makes the user state and setUser function available to any component that is a descendant of this provider in the component tree.

value={{ user, setUser }}: This prop passes an object with the user state and the setUser function to the provider. 
Any component that consumes this context will have access to both the current user information and the function to update it.

{children}: This is a special prop that represents any nested components inside UserContextProvider. 
By using {children}, you can wrap other components with UserContextProvider, making the context values available to them.
*/