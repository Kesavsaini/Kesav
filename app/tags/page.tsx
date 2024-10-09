import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="glassMorphic flex flex-wrap gap-4 bg-[#F5F5DC] p-8 dark:bg-[rgba(0,0,0,0.25)] sm:items-center sm:justify-center">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t, index) => {
            return <Designedtag key={index} t={t} tagCounts={tagCounts} />
          })}
        </div>
      </div>
    </>
  )
}

const Designedtag = ({ t, tagCounts }) => {
  return (
    <div className="group relative inline-block px-4 py-2 font-medium">
      <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-white"></span>
      <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black dark:border-white dark:bg-black dark:group-hover:bg-white"></span>
      <span className="relative text-black group-hover:text-white dark:text-white dark:group-hover:text-black">
        <Tag text={t} />
        <Link
          href={`/tags/${slug(t)}`}
          className="-ml-2 text-sm font-semibold uppercase text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
          aria-label={`View posts tagged ${t}`}
        >
          {` (${tagCounts[t]})`}
        </Link>
      </span>
    </div>
  )
}
