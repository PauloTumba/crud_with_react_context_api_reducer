import { createContext } from "react";
import { UserContextType, initialState } from "./data";

export const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => {},
});