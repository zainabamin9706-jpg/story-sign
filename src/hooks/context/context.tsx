import { createContext } from "react";

interface User {
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

interface AppContextType {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;

  tokenType: string;
  setTokenType: (tokenType: string) => void;

  expiresIn: number;
  setExpiresIn: (expiresIn: number) => void;

  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;

  refreshExpiresIn: number;
  setRefreshExpiresIn: (refreshExpiresIn: number) => void;

  refreshExpiresAt: string;
  setRefreshExpiresAt: (refreshExpiresAt: string) => void;

  user: User | null;
  setUser: (user: User | null) => void;
}

export const AppContext = createContext<AppContextType>({
  accessToken: "",
  setAccessToken: () => {},

  tokenType: "Bearer",
  setTokenType: () => {},

  expiresIn: 0,
  setExpiresIn: () => {},

  refreshToken: "",
  setRefreshToken: () => {},

  refreshExpiresIn: 0,
  setRefreshExpiresIn: () => {},

  refreshExpiresAt: "",
  setRefreshExpiresAt: () => {},

  user: null,
  setUser: () => {},
});
