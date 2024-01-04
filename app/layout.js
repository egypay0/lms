import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './component/Nav.js'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTS Label Management System',
  description: 'NTS',
}

export default function RootLayout({ children }) {
  return (

    

    <html lang="en">
      <body className="  min-h-screen ">
      <Nav />
      <div className='flex flex-col items-center justify-between p-24'>
      {children}
      </div>
      
      </body>
    </html>
     
  )
}
