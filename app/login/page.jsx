
import styles from '../ui/login/login.module.css'
const LogingPage = () =>{


  return (
<div className={styles.container}>
  
  <form action="" className={styles.form}>
  <h1>Login </h1>
  <input type="text" placeholder='user name'/>
  <input type='password' placeholder='password'/>
  <button >Login</button>
  </form>

</div>
  )
}

export default LogingPage