'use client'
import { FormEvent } from "react";
import {signIn    } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function LoginForm(){
    const router = useRouter();
    const handlerSubmit = async (e: FormEvent<HTMLFormElement> ) => {

        e.preventDefault();
    
        const formData = new FormData (e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect : false,
        })
      console.log({response})
      if (!response?.error){
        router.push("/");
        router.refresh();
        
      }
    }

    return (

        <div className="container">
        <form onSubmit={handlerSubmit} className="flex flex-col gap-2 mx-auto max-w-sm">
        <input name="email" type="email" className=" border border-black "/>
        <input name="password" type="password" className=" border border-black "/>
        <button type="submit">Login</button>
        
        </form>
        </div>
    )
}