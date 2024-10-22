import { observer } from "mobx-react";
import React, { useCallback, useState } from "react";

export class LoginContextType {
  username: string = "";
  error: string | null = null;
  onLogin: (username: string, password: string) => void = () => {};
  onLogout: () => void = () => {};
}

export const LoginContext = React.createContext<LoginContextType | null>(null);

interface IProps {
  children: React.ReactNode;
}

export const LoginProvider = observer(({ children }: IProps) => {
  const value = useHookLogin();
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
});

function useHookLogin(): LoginContextType {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onLogin = useCallback((username: string, password: string) => {
    if (username === "admin" && password === "123456") {
      setUsername(username);
      setError(null);
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu!");
    }
  }, []);

  const onLogout = useCallback(() => {
    setUsername("");
  }, []);

  return {
    username,
    error,
    onLogin,
    onLogout,
  };
}

export function useLoginContext(): LoginContextType {
  return React.useContext(LoginContext) as LoginContextType;
}
