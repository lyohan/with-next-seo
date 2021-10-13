import { ArticleJsonLd } from 'next-seo'

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld

import Head from 'next/head'

export default function JsonLd() {
  return (
    <div>
      <Head>
        <meta property="og:type" content="website" key="a" />
        <meta property="og:title" content="안녕 메타태그 바뀌냐?" key="b" />
        <meta property="og:url" content="https://projectlion.io/" key="c" />
        <meta property="og:description" content="ㅇㅇㅇㅇㅁㅇㄴㄹ이건 메타메타메타태그여" key="d" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1634057006528-dce9553adee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" key="e" />
      </Head>
      <h1>meta tag 키 추가!!!!!!!!!!</h1>
      <h2>다시 getInitial 추가.......?</h2>
      <p>
        _app getinitailProps 메타태그 테스트....
        initialProps 제거 테스트
      </p>
    </div>
  )
}
