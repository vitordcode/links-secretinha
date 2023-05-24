import Link from 'next/link'

export const Linktree = (props) => {
  return (
    <li className="w-full bg-white py-4 px-6 rounded-md">
      <Link href={props.url} className='font-medium'>{props.linkName}</Link>
    </li>
  )
}
