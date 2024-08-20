import { createContext, useContext } from "react";

export const UserContext = createContext({
  user: { email: '', password: '' },  // Default value
  setUser: () => {},
  loginState:false,
  setLoginState:()=>{}
});

export const UserContextProvider = UserContext.Provider;

export function useUser() {
  return useContext(UserContext);
}
