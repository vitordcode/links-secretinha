import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secretinha Sexshop',
  description: 'A sua loja online de bem-estar intimo!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='bg-black'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
