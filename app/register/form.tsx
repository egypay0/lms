'use client';

import { FormEvent } from "react"
 
export default function Form(){

    const handlerSubmit = async (e: FormEvent<HTMLFormElement> ) => {

        e.preventDefault();
    
        const formData = new FormData (e.currentTarget);
        const response = await fetch ('/api/auth/register',{
            method:'POST',
            body : JSON.stringify({
                email:formData.get('email'),
                password: formData.get('password'),
            })
        })
    console.log({response})
      }



    return (
<div className="container">
        <form onSubmit={handlerSubmit} className="flex flex-col gap-2 mx-auto max-w-sm">
        <input name="email" type="email" className=" border border-black "/>
        <input name="password" type="password" className=" border border-black "/>
        <button type="submit">Register</button>
        
        </form>
        </div>

    )
}