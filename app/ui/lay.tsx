
'use client'
import { signOut } from "next-auth/react"
export default function Bord(){


    return(
        <div>
         Dashboard   
         <br/>
       <button onClick={() => signOut()}>Sign out</button>
         </div>
    )
}