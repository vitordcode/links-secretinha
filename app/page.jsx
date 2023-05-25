'use client'
import Link from 'next/link'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql, useQuery } from '@apollo/client'


import { Profile } from './components/Profile'
import { Linktree } from './components/Link'
import { Social } from './components/Social'
import { Loading } from './components/Loading'


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
  const { data, loading, error } =  useQuery(query)
  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os dados.</p>;
  }

  return (
    <div className="w-full bg-logo max-h-screen bg-cover overflow-hidden">
      <div className="w-full h-screen bg-black/20 flex flex-col relative justify-center">
        <header className="w-full mb-16 fixed top-8">
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

        <div className=" overflow-y-scroll">
          <ul className="w-full flex-1 max-w-2xl mx-auto px-8 flex flex-col  gap-y-5 text-center">
            {data.links.map((item, index) => {
              return (
                <li key={index} className="w-full bg-gray-100 rounded-md">
                  <Linktree url={item.url} linkName={item.linkName} />
                </li>
              )
            })}
          </ul>
        </div>

        <footer className="w-full fixed bottom-0">
          <div className="max-w-2xl mx-auto p-8 text-center">
            <ul className="flex items-center mx-auto justify-center gap-x-4 mb-4">
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

            <span className="text-white text-sm">
              Desenvolvido por
              <Link
                className="font-bold"
                href="https://linkedin.com/in/vitordcode"
              >
                {' '}
                Vitor de Paula
              </Link>
              .
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
