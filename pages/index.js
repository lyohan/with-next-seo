import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: 'https://www.canonicalurl.ie/',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://cdn.pixabay.com/photo/2021/08/03/07/03/orange-6518675_960_720.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <h1>SEO Added to Page</h1>
      <p>Take a look at the head to see what has been added.</p>
      <p>
        Or checkout how{' '}
        <Link href="/jsonld">
          <a>JSON-LD</a>
        </Link>{' '}
        (Structured Data) is added
      </p>
    </div>
  )
}
