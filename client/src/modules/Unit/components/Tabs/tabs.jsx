import {RiStockFill} from "react-icons/ri"
import {IoMdStats} from "react-icons/io"

import {IoIosFlask} from "react-icons/io"
import {LuDroplets} from "react-icons/lu"
import {IoNewspaperOutline} from "react-icons/io5"
import {BsGrid} from "react-icons/bs"
 
export const tabs=[
    {
      icon:<BsGrid />,
      name:"Overview",
      link:"/overview"
     },
     {
        icon:<RiStockFill/>,
        name:"Charts",
        link:"/stocks"
     },
     {
        icon:<IoIosFlask />,
        name:"Analysis",
        link:"/markets"
      },
      
       {
         icon:<IoNewspaperOutline />,
         name:"News",
         link:"/indices"
       },
       {
        icon:<IoMdStats />,
        name:"Stats",
        link:"/commodities"
       },
  ]

