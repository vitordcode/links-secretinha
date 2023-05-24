"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

import { gql } from "@apollo/client";

import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import Logo from '../public/images/s.png'
import { Profile } from "./components/Profile";
import { Linktree } from "./components/Link";
import { Social } from "./components/Social";

const query = gql`
  query MyQuery {
    profiles {
      arroba
      profileImage {
        url
      }
    }
    links {
      linkName
      url
    }
    socialMedias {
      socialUrl
      iconSvg
    }
  }
`

export default function Home() {

  const { data } = useSuspenseQuery(query)

  return (
    <div className="w-full bg-logo h-screen bg-cover">
      <div className="w-full h-screen bg-black/20 flex flex-col">
        <header className="w-full">
          {data.profiles.map((item, index) => {
            return (
              <Profile 
                key={index}
                profileImage={item.profileImage.url}
                arroba={item.arroba}
              />
            )
          })}
        </header>

        <ul className="w-full flex-1 max-w-2xl mx-auto px-8 flex flex-col mt-20 gap-y-5 text-center">
          {data.links.map((item, index) => {
            return (
              <Linktree
                key={index}
                url={item.url}
                linkName={item.linkName}
              />
            )
          })}
        </ul>

        <footer className='w-full'>
          <div className='max-w-2xl mx-auto p-8 text-center'>
            <ul className='flex items-center mx-auto justify-center gap-x-4 mb-4'>
              {data.socialMedias.map((item, index) => {
                return (
                  <Social 
                    key={index}
                    socialUrl={item.socialUrl}
                    iconSvg={item.iconSvg}
                  />
                )
              })}
            </ul>

            <span className='text-white text-sm'>Desenvolvido por<Link className='font-bold' href="https://linkedin.com/in/vitordcode"> Vitor de Paula</Link>.</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
