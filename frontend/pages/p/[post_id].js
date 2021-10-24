import Head from 'next/head'
import SecondaryLayout from '../../components/layouts/secondary'
import Post from '../../components/post'
import { remark } from 'remark'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { api } from '../../services/api'

export default function Home({ content, title, created_at, updated_at, tags }) {
  return (
    <SecondaryLayout>
      <Head>
        <title>{ title } | Alexandre Ramos</title>
      </Head>
      <Post content={content || ''} created_at={created_at || ''} updated_at={updated_at || ''} title={title || ''} tags={tags || []} />
    </SecondaryLayout>
  )
}

export const getStaticProps = async ({ params }) => {

  try{
    const post = await api.get(`/posts/${params.post_id}`)
    const result = await remark()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkToc)
      .use(remarkPresetLintRecommended)
      .use(remarkHtml)
      .use(remarkGfm)
      .use(remarkStringify)
      .process(post?.data?.content.trim());
  
    return {
      props: {
        content: result.toString(),
        title: post.data.title,
        created_at: post.data.created_at,
        updated_at: post?.data?.updated_at,
        tags: post.data.tags
      },
      revalidate: 3600
    }
  }catch(err){
    return {
      props: {},
      notFound: true
    }
  }
}

export const getStaticPaths = async () => {
  
  const posts = await api.get('/posts')

  return {
    paths: posts?.data?.posts.map(post => ({ params: { post_id: post.id } })),
    fallback: true,
  }
}