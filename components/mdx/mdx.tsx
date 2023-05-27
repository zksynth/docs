import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './link'
import PostImage from './image'
import PostBanner from './banner'
import PostModalVideo from './modal-video'
import PostAccordion from './accordion'
import PostTag from './tag'
import PostTable, { TableHead, TableBody, TableHeadRow, TableBodyRow, TableTh, TableTd } from './table'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
  ModalVideo: PostModalVideo,
  Accordion: PostAccordion,
  Tag: PostTag,
  Table: PostTable,
  THead: TableHead,
  TBody: TableBody,
  ThRow: TableHeadRow,
  TbRow: TableBodyRow,
  Th: TableTh,
  Td: TableTd,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose text-slate-600 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
