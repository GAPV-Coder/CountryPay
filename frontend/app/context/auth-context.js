"use client";
import React, {useEffect} from "react";
const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const [authState, setAuthState] = React.useState(() => {
    if (isBrowser) {
      const storedToken = localStorage.getItem("token");
      return {
        token: storedToken || "",
      };
    } else {
      return {
        token: "",
      };
    }
  });
  const setUserAuthInfo = (data) => {
    const token = data.token;
    localStorage.setItem("token", token);
    setAuthState({
      token,
    });
  };
  const isUserAuthenticated = () => !!authState.token;


  // const isUserAuthenticated = () => {
  //   if (typeof window !== 'undefined') {
      
  //     const storedToken = localStorage.getItem("token");
  //     // Devuelve true si hay un token válido almacenado, de lo contrario, false
  //     return !!storedToken 
  //   }
  //   return false;
  // };

  
  return (
    <Provider
      value={{
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
      
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
