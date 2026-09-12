import { createContext } from "react";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
  avatarUrl: string | null;
  bio: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
  refreshExpiresAt: string;
  user: User | null;
}

interface AppContextType extends AuthSession {
  setAuthSession: (session: AuthSession) => void;
  clearAuthSession: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const emptyAuthSession: AuthSession = {
  accessToken: "",
  tokenType: "Bearer",
  expiresIn: 0,
  refreshToken: "",
  refreshExpiresIn: 0,
  refreshExpiresAt: "",
  user: null,
};

export const AppContext = createContext<AppContextType>({
  ...emptyAuthSession,
  setAuthSession: () => {},
  clearAuthSession: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});
