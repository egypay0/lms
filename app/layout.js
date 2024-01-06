import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './component/Nav.js'
 import { getServerSession } from 'next-auth'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTS Label Management System',
  description: 'NTS',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();
  return (

    

    <html lang="en">
      <body className="  min-h-screen ">
         <Nav />
    
      <div className='flex flex-col items-center justify-between p-24'>

      
      {children}

      {session && <span>logout</span>}
       {!session && <span>login</span>}
      </div>
      
      </body>
    </html>
     
  )
}
