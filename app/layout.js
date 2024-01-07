 
import { Inter } from 'next/font/google'
import './ui/globals.css'
import Nav from './component/Nav.js'
 import { getServerSession } from 'next-auth'
 import Link from 'next/link'
import Logout from './logout'
import { SessionProvider } from 'next-auth/react'
import Sidebar from './ui/dashboard/sidebar/page.jsx'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTS Label Management System',
  description: 'NTS',
}

export default async function RootLayout({ children }) {



  const session = await getServerSession({children});

 
  return (

    

    <html lang="en">
      <body className="    ">
         <Nav />
    
      <div className=' '>

      { !!session && <Logout/> }
        
      {children} 

         
      </div>
      
      </body>
    </html>
     
  )
}
