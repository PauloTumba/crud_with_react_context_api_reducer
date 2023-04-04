import { useReducer } from "react";
import { UserContext } from "./usersContext";
import { userReducer } from "./usersReducer";
import { initialState } from "./data";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};