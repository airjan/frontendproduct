import '../styles/style.css'
import Layout from '../components/Layout';
import { SearchProvider } from '../lib/searchprovider'
export default function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SearchProvider>
  );
}