import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>라우터 푸쉬!!!!!!!</h1>
      <p>Take a look at the head to see what has been added.</p>
      <p>
        Or checkout how{' '}
        <div onClick={() => router.push("/jsonld")}>
          <p>JSON-LD</p>
        </div>{' '}
        (Structured Data) is added
      </p>
    </div>
  )
}
