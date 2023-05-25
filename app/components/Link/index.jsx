import Link from 'next/link'

export const Linktree = props => {
  return (
    <Link
      href={props.url}
      className="font-medium py-4 px-6 block w-full h-full"
    >
      {props.linkName}
    </Link>
  )
}
