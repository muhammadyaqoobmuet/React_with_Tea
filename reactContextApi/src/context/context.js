import React from "react";

const UserContext = React.createContext();

export default UserContext;

// This object contains a Provider and a Consumer

// The Provider component is used to wrap the part of your component tree that needs access to the context.
//  It accepts a value prop, which is the data you want to make available to consumers.

// Consumer: The Consumer component allows you to subscribe to context changes. It requires a function as a child
//  that receives the current context value and returns a React element.