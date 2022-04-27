import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Dyzrupt | Web Development</title>
        <meta name="keyword" content='Web Development, Software, Website' />
      </Head>
      <h1>Welcome to Next Js</h1>
      <ArticleList articles={ articles } />
    </div>
  )
}


//Functions to Fetch Data

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}