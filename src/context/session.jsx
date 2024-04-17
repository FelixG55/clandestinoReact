import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [session, setSession] = useState(() => {
    const storedLogged = localStorage.getItem("logged");
    const storedImage = localStorage.getItem("image");
    const storedUser = localStorage.getItem("user");
    const storedAdmin = localStorage.getItem("admin");
    return {
      logged: storedLogged ? JSON.parse(storedLogged) : false,
      image: storedImage ? JSON.parse(storedImage) : null,
      user: storedUser ? JSON.parse(storedUser) : null,
      admin: storedAdmin ? JSON.parse(storedAdmin) : null,
    };
  });

  useEffect(() => {
    if (session.logged) {
      localStorage.setItem("logged", JSON.stringify(session.logged));
    } else {
      localStorage.removeItem("logged");
    }
    if (session.image) {
      localStorage.setItem("image", JSON.stringify(session.image));
    } else {
      localStorage.removeItem("image");
    }
    if (session.user) {
      localStorage.setItem("user", JSON.stringify(session.user));
    } else {
      localStorage.removeItem("user");
    }
    if (session.admin) {
        localStorage.setItem("admin", JSON.stringify(session.admin));
    }
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}
