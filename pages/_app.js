/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import axios from 'axios'
import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import SEO from '../next-seo.config'

export default function MyApp({ Component, pageProps, data }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const { data } = await axios.get('http://api.icndb.com/jokes/random')

  return { ...appProps, data }
}
