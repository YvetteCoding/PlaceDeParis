import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.css';







function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )

}

export default MyApp
