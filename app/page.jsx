import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import Logo from '../public/images/s.png'

export default function Home() {
  return (
    <div className="w-full bg-logo h-screen bg-cover">
      <div className="w-full h-screen bg-black/60 flex flex-col">
        <header className="flex flex-col items-center pt-16">
          <Image
            src={Logo}
            className="w-20 h-20 rounded-full"
            alt="Logo Secretinha"
          />
          <span className="font-medium text-white pt-3">
            @secretinhasexshop
          </span>
        </header>

        <ul className="w-full flex-1 max-w-2xl mx-auto px-8 flex flex-col mt-20 gap-y-5 text-center">
          <li className='w-full bg-white py-4 px-6 rounded-md'>
            <Link href="https://spotify.com" class>
              Playlist Spotify
            </Link>
          </li>
          <li className='w-full bg-white py-4 px-6 rounded-md'>
            <Link href="https://spotify.com" class>
              Playlist Hot & Sexy
            </Link>
          </li>
          <li className='w-full bg-white py-4 px-6 rounded-md'>
            <Link href="https://spotify.com" class>
              Estoque online
            </Link>
          </li>
        </ul>

        <footer className='w-full'>
          <div className='max-w-2xl mx-auto p-8 text-center'>
            <ul className='flex items-center mx-auto justify-center gap-x-4 mb-4'>
              <li>
                <Link href="https://instagram.com">
                  <AiOutlineInstagram size={28} className='text-white' />
                </Link>
              </li>
              <li>
                <Link href="https://telegram.com">
                  <FaTelegramPlane size={28} className='text-white' />
                </Link>
              </li>
              <li>
                <Link href="https://whatsapp.com">
                  <AiOutlineWhatsApp size={28} className='text-white' />
                </Link>
              </li>
            </ul>

            <span className='text-white text-sm'>Desenvolvido por<Link className='font-bold' href="https://linkedin.com/in/vitordcode"> Vitor de Paula</Link>.</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
