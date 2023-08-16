import { User } from "types/User";

//UserProvider property type definition
export type UserProviderProps = {
  children: React.ReactNode;
};

//UserContext property definition
export type UserCTXProps={
    user:User,
    setUser:React.Dispatch<React.SetStateAction<User>>
}