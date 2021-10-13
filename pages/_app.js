/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import axios from 'axios'
import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import SEO from '../next-seo.config'
import Head from 'next/head'

export default function MyApp({ Component, pageProps, data }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <Head>
        <meta property="og:type" content="website" key="a" />
        <meta property="og:title" content="_app 메타태그야!@!@" key="b" />
        <meta property="og:url" content="https://naver.com/" key="c" />
        <meta property="og:description" content="이거슨1111 _app.js 루트의 메타 디스크립션" key='d' />
        <meta property="og:image" content="https://images.unsplash.com/photo-1634053605092-f34639dc76db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" key="e" />
      </Head>
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
