import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineLock} from "react-icons/md"
import {FaQuestion,FaVoteYea} from "react-icons/fa"
import {GiToken} from "react-icons/gi"


export const navs=[
    {
      icon:<FaVoteYea />,
      navName:"Governance",
      link:"/dao"
     },
     {
      icon:<GiToken />,
      navName:"create",
      link:"/create"
     },
     {
        icon:<IoIosNotifications />,
        navName:"Alert",
        link:"/alerts"
      },
      {
        icon:<BsFillPersonFill />,
        navName:"Account",
        link:"/account"
      },
       {
        icon:<FaQuestion />,
        navName:"FAQs",
        link:"/faq"
       },
      
  ]