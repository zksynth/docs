import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import TopicTitle from '@/components/ui/topic-title'
import Hamburger from '@/components/ui/hamburger'
import Feedback from '@/components/ui/feedback'
import PageNavigation from '@/components/ui/page-navigation'
import Footer from '@/components/ui/footer'
import SecondaryNav from '@/components/ui/secondary-nav'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
  }
}

export default async function SinglePost({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  return (
    <>
      {/* Page header */}
      <div className="h-8 flex items-center mb-6">
        <TopicTitle name={post.topic.name} segment={post.topic.slug} />
      </div>

      <article className="flex xl:space-x-12">

        {/* Main area */}
        <div className="min-w-0">

          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden flex items-center mb-8">

            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">{post.topic.name}</span>
              <svg className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">{post.title}</span>
            </div>

          </div>

          {/* Article content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200">{post.title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {post.summary}
              </p>
            </header>
            <Mdx code={post.body.code} />
          </div>

          {/* Feedback */}
          <Feedback />

          {/* Page navigation */}
          <PageNavigation prevArticle={post.prev} nextArticle={post.next} />

          {/* Content footer */}
          <Footer />

        </div>

        {/* Secondary navigation */}
        <SecondaryNav />

      </article>
    </>
  )
}
