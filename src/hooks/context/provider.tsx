import { useState } from "react";
import { AppContext } from "./context";

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

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState("");
  const [tokenType, setTokenType] = useState("Bearer");
  const [expiresIn, setExpiresIn] = useState(0);
  const [refreshToken, setRefreshToken] = useState("");
  const [refreshExpiresIn, setRefreshExpiresIn] = useState(0);
  const [refreshExpiresAt, setRefreshExpiresAt] = useState("");
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,

        tokenType,
        setTokenType,

        expiresIn,
        setExpiresIn,

        refreshToken,
        setRefreshToken,

        refreshExpiresIn,
        setRefreshExpiresIn,

        refreshExpiresAt,
        setRefreshExpiresAt,

        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
