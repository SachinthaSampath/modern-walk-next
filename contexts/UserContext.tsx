import React, { useContext } from "react";
import { createContext, useState } from "react";
import { User } from "../types/User";
import { UserCTXProps, UserProviderProps } from "./UserContext.Types";



//create user context
const UserContext = createContext<UserCTXProps | null>(null);

//custom hook to access properties from outside easily
const useUserContext = (): UserCTXProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within UserContext.Provider");
  }
  return { ...context };
};


//default user object to initialize state
const defaultUser: User = {
  name: "",
  email: "",
  username: "",
  isLoggedIn: false,
};


//create  user context provider
const UserProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {

  //crate state with default user object
  const [user, setUser] = useState<User>(defaultUser);

  //function to update user, only the given properties will be updated.
  const updateUser = (user: {}) => {
    setUser((prevUser) => {
      return { ...prevUser, ...user };
    });
  };

  //data to send with context provider
  const data = {
    user,
    setUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export {UserProvider,useUserContext};
