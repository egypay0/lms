 
import { Inter } from 'next/font/google'
import './ui/globals.css'
  import { getServerSession } from 'next-auth'
 import Link from 'next/link'
 import { SessionProvider } from 'next-auth/react'
import Sidebar from './ui/dashboard/sidebar/page.jsx'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTS Label Management System',
  description: 'NTS',
}

export default async function RootLayout({ children }) {



 
 
  return (

    

    <html lang="en">
      <body >
         
       

      
        
      {children} 

         
       
      
      </body>
    </html>
     
  )
}
