import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import './api/dogs'
import {useEffect, useState} from 'react'

function MyApp({ Component, pageProps }) {
  //dogState is name of the state,
  //SetDog is the function that sets state,
  //useState sets default value of the state as an argument to useState
  const [dogs, setDog] = useState([])

  async function fetchDogs() {
    try {
      const res = await fetch('http://localhost:3001/dogs', {
        method: 'GET',
      });
      const data = await res.json();
      setDog(data);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <Component dogs={dogs} {...pageProps} />
  </div>
  )
}
export default MyApp;
