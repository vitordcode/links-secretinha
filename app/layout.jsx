import './globals.css'
import { Montserrat } from 'next/font/google'

import { ApolloWrapper } from './lib/apollo-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Secretinha Sexshop',
  description: 'A sua loja online de bem-estar intimo!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-black">
      <body className={montserrat.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
