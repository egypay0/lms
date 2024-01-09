 import Image from 'next/image'
import { redirect } from 'next/navigation'
 export default function Home() {
  return (
    <main className=" ">
      <div className=" ">
         <h1 >Hello</h1>
           
      </div>
 
       
    </main>
  )
  redirect("/dashboard");
}
