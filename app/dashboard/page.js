import React from "react";
import {getServerSession} from 'next-auth'
import  {redirect} from 'next/navigation'

export default function DashnoardPage(){

const session = getServerSession();

if (!session)
{
   redirect("/login");
}

    return (
        <div>Dashboard  Page c</div>
    )
}