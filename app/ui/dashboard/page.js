

import React from "react";
import {getServerSession } from 'next-auth'
import  {redirect} from 'next/navigation'
  export default async function DashnoardPage(){
 
   
       
const session =  await  getServerSession();
 
   if (!session)
{
   redirect("/login");
}
 
    return (
        
        <div> dashboard</div>
    )
}