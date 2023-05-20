import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import Signin from '@/components/Signin'

import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-robot' })
const baiJumjure = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jumjure' })

export const metadata = {
  title: 'NLW',
  description: 'aplicação da NLW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticate = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJumjure.variable} font-sans text-gray-100 bg-gray-900`}>
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-between items-start px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticate ? <Profile /> : <Signin />}
            <Hero />
            <Copyright />
          </div>


          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main >
      </body>
    </html>
  )
}
