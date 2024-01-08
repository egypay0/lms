"use client";

import styles from '../ui/login/login.module.css'
import {authenticate}  from "../lib/actions"
import { useFormState } from "react-dom";

const LogingPage = () =>{

  const [state, formAction] = useFormState(authenticate, undefined);

  return (
<div className={styles.container}>
  
  <form action={formAction} className={styles.form}>
  <h1>Login </h1>
  <input name="username" type="text" placeholder='user name'/>
  <input name="password" type='password' placeholder='password'/>
  <button >Login</button>
  </form>

</div>
  )
}

export default LogingPage