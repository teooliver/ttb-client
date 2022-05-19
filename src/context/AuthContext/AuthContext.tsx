import { createContext, useContext, useState } from 'react';

export interface User {
  name: string;
  email: string;
}

interface AuthProviderProps {
  children: React.ReactElement;
}

interface AuthContextType {
  user: User | null;
  login: (user: User, callback: VoidFunction) => void;
  logout: (callback?: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User, callback?: VoidFunction) => {
    setUser(user);
    if (!callback) {
      return;
    }
    callback();
  };

  const logout = (callback?: VoidFunction) => {
    setUser(null);
    if (!callback) {
      return;
    }
    callback();
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
