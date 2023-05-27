import Link from 'next/link'

export default function PageNavigation({
  prevArticle,
  nextArticle
}: {
    prevArticle?: {
      name: string,
      slug: string
    },
    nextArticle?: {
      name: string,
      slug: string
    }
}) {
  return (
    <div className="sm:flex items-center justify-between py-8 space-y-6 sm:space-y-0 sm:space-x-4">
      {/* Prev link */}
      {prevArticle &&
        <div className="sm:w-1/2 sm:flex flex-col items-start">
          <div>
            <div className="text-xs font-[650] text-blue-600 uppercase mb-1">Prev</div>
            <div>
              <Link className="text-slate-800 font-[650] flex items-center dark:text-slate-200" href={prevArticle.slug}>
                <svg className="fill-slate-400 shrink-0 mr-2 rotate-180 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
                <span>{prevArticle.name}</span>
              </Link>
            </div>
          </div>
        </div>
      }
      {/* Next link */}
      {nextArticle &&
        <div className="sm:w-1/2 sm:flex flex-col items-end ml-auto">
          <div>
            <div className="text-xs font-[650] text-blue-600 uppercase mb-1">Next</div>
            <div>
              <Link className="text-slate-800 font-[650] flex items-center dark:text-slate-200" href={nextArticle.slug}>
                <span>{nextArticle.name}</span>
                <svg className="fill-slate-400 shrink-0 ml-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
