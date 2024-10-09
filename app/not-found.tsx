import Link from '@/components/Link'
import Error404 from '@/data/Error404.svg'

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
      <Error404 className="h-[30rem] w-[90%]"></Error404>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
