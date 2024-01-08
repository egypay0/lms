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
        title:"Food",
        path:"/dashboard/food",
        icon:<MdSupervisedUserCircle/>,
    },
    {
        title:"Designs",
        path:"/dashboard/designs",
        icon:<MdShoppingBag/>,
    },

    {
        title:"Allergens",
        path:"/dashboard/allergens",
        icon:<MdShoppingBag/>,
    },
    {
        title:"Food Properties",
        path:"/dashboard/fproperties",
        icon:<MdShoppingBag/>,
    },
    {
        title:"Print",
        path:"/dashboard/print",
        icon:<MdShoppingBag/>,
    },


    ]
} ,
{ title:"Support",
list: [
{
title:"Support",
path:"/support",
icon:<MdDashboard/>,
},
{
title:"Users",
path:"/dashboard/products",
icon:<MdSupervisedUserCircle/>,
},
{
title:"Setting",
path:"/test",
icon:<MdShoppingBag/>,
},
]}]

const  Sidebar = () =>{


   

    return (
        <div className={styles.container}>
        <div className={styles.user}>
        <Image src="/noavatar.png" className={styles.userImage} alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
        <span className={styles.userName}> Ahmed</span>
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