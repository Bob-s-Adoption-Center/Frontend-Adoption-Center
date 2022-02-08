import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./api/oauth-token";
import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  //dogState is name of the state,
  //SetDog is the function that sets state,
  //useState sets default value of the state as an argument to useState
  const [dogs, setDog] = useState([]);

  const [accessToken, setAccessToken] = useState(null);

  async function fetchDogs() {
    const res = await fetch("http://localhost:3001/dogs");
    const data = await res.json();
    setDog(data);
  }

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("/api/oauth-token");
      const json = await res.json();
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
    import("bootstrap/dist/js/bootstrap");
    fetchDogs();
  }, []);

  return (
    <AuthContext.Provider value={accessToken}>
      <Component dogs={dogs} {...pageProps} />
    </AuthContext.Provider>
  );
}
export default MyApp;
