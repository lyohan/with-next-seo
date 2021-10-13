import { ArticleJsonLd } from 'next-seo'

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld

import Head from 'next/head'

export default function JsonLd() {
  return (
    <div>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="메타태그 바뀌냐?" />
        <meta property="og:url" content="https://projectlion.io/" />
        <meta property="og:description" content="이건 메타메타메타태그여" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1634057006528-dce9553adee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" />
      </Head>
      <h1>JSON-LD Added to Page</h1>
      <p>
        _app getinitailProps 메타태그 테스트....
      </p>
    </div>
  )
}
