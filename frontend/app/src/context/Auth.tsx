import { createContext, useContext, useState, type ReactNode } from "react";

type User = { email: string } | null;

type AuthContextValue = {
  user: User;
  token: string | null;
  authHeader: () => Partial<Record<string, string>>;
  login: (email: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Very small auth context:
 * - Stores user email + token in memory only.
 * - Exposes an authHeader() helper to attach Authorization headers.
 * You can replace this with your own persistence (localStorage, etc.).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);

  const authHeader = (): Partial<Record<string, string>> =>
    token ? { Authorization: `Bearer ${token}` } : {};

  const login = (email: string, tokenValue: string) => {
    setUser({ email });
    setToken(tokenValue);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, authHeader, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
