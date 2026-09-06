import { createContext } from "react";
interface AppContextType {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}
export const AppContext = createContext<AppContextType>({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});
