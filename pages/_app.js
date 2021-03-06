import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./api/oauth-token";
import { useEffect, useState, createContext } from "react";
export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("/api/oauth-token");
      const json = await res.json();
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <AuthContext.Provider value={accessToken}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
export default MyApp;
