import Link from 'next/link'
import { CMSIcon } from '../cms-icon'

export const Social = (props) => {
  return (
    <li>
      <a href={props.socialUrl} className='text-white'>
        <CMSIcon icon={props.iconSvg} />
      </a>
    </li>
  )
}
