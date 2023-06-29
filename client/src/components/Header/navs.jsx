import {BiPencil} from "react-icons/bi"
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineLock} from "react-icons/md"
import {FaQuestion} from "react-icons/fa"


export const navs=[
    {
      icon:<BiPencil />,
      navName:"Reviews",
      link:"/review"
     },
     {
        icon:<IoIosNotifications />,
        navName:"Alert",
        link:"/alerts"
      },
       {
        icon:<FaQuestion />,
        navName:"FAQs",
        link:"/faq"
       },
      
  ]