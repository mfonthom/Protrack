import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider(props) {
  const [isAuth, setIsAuth] = useState(false);
  return <AuthContext.Provider value={history}> </AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
