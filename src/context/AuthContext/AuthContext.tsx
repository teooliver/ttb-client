import { createContext, useContext, useState } from 'react';

export interface User {
  name: string;
  email: string;
}

interface AuthProviderProps {
  children: React.ReactElement;
}

interface AuthContextDefaults {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// TODO: Better typing for default AuthContext, maybe
// AuthContextDefaults | null ?
const AuthContext = createContext<AuthContextDefaults>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
