import {RiStockFill} from "react-icons/ri"

import {BsFillHousesFill,BsThreeDots} from "react-icons/bs"


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
        name:"Stocks",
        link:"/stocks"
     },
     {
        icon:<BsFillHousesFill/>,
        name:"Data markets",
        link:"/markets"
      },
      {
        icon:<LuDroplets/>,
        name:"Commodities",
        link:"/commodities"
       },
       {
         icon:<IoNewspaperOutline />,
         name:"Indices",
         link:"/indices"
       },
       {
        icon:<BsThreeDots/>,
        name:"More",
        link:"/cart"
      }
  ]

