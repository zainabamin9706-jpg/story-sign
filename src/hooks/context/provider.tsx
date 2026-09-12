import { useState, type ReactNode } from "react";
import {
  AppContext,
  emptyAuthSession,
  type AuthSession,
} from "./context";

const readStoredAuth = (): AuthSession => {
  const storedAuth = sessionStorage.getItem("auth");
  if (!storedAuth) return emptyAuthSession;

  try {
    const parsed = JSON.parse(storedAuth) as Partial<AuthSession> & {
      token?: string;
    };
    const accessToken = parsed.accessToken ?? parsed.token ?? "";

    if (!accessToken || !parsed.user) {
      sessionStorage.removeItem("auth");
      return emptyAuthSession;
    }

    return {
      accessToken,
      tokenType: parsed.tokenType ?? "Bearer",
      expiresIn: parsed.expiresIn ?? 0,
      refreshToken: parsed.refreshToken ?? "",
      refreshExpiresIn: parsed.refreshExpiresIn ?? 0,
      refreshExpiresAt: parsed.refreshExpiresAt ?? "",
      user: parsed.user,
    };
  } catch {
    sessionStorage.removeItem("auth");
    return emptyAuthSession;
  }
};

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [authSession, setAuthState] = useState<AuthSession>(readStoredAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setAuthSession = (session: AuthSession) => {
    sessionStorage.setItem("auth", JSON.stringify(session));
    setAuthState(session);
  };

  const clearAuthSession = () => {
    sessionStorage.removeItem("auth");
    setAuthState(emptyAuthSession);
  };

  return (
    <AppContext.Provider
      value={{
        ...authSession,
        setAuthSession,
        clearAuthSession,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
