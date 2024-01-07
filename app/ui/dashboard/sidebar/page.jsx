import styles from './sidebar.module.css'
import{MdDashboard, MdShoppingBag, MdSupervisedUserCircle} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'
const menuItem =[
    {
    title:"Pages",
    list: [
        {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard/>,
    },
    {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle/>,
    },
    {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>,
    },
    ]
} ,
{ title:"Ana",
list: [
{
title:"Dashboard",
path:"/dashboard",
icon:<MdDashboard/>,
},
{
title:"Users",
path:"/dashboard/users",
icon:<MdSupervisedUserCircle/>,
},
{
title:"Products",
path:"/dashboard/products",
icon:<MdShoppingBag/>,
},
]}]

const  Sidebar = () =>{


   

    return (
        <div className={styles.container}>
        <div className={styles.user}>
        <Image src="/noavatar.png" className={styles.userImage} alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
        <span className={styles.userName}> John Joe</span>
        <span className={styles.userTitle}> Administartor</span>
        </div>
        </div>
        <ul className={styles.list}>
        {menuItem.map((cat)=> (
            <li key={cat.title} > 
            <span className={styles.cat}> {cat.title}</span>
            {cat.list.map((item)=>(
                <MenuLink  item={item} key= {item.title}/>
                
            ))}</li>
        ))}</ul>
        </div>
    )
}

export default Sidebar;