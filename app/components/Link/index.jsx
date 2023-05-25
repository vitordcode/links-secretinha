import Link from 'next/link'

export const Linktree = (props) => {
  return (
    <ul className='w-full flex-1 max-w-2xl mx-auto px-8 flex flex-col mt-20 gap-y-5 text-center'>
      <li className="w-full bg-white py-4 px-6 rounded-md">
        <Link href={props.url} className='font-medium'>{props.linkName}</Link>
      </li>
    </ul>
  )
}
