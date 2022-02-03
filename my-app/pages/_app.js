import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import './api/dogs'
import {Component, useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />

}

export default MyApp
