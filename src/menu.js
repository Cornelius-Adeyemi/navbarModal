import logo from "./logo.svg";
import { FaTimes } from 'react-icons/fa';
import {links, social} from "./data";
import { useGlobalContext } from "./context";


export function Menu(props){

  const {menu,closeMenu}= useGlobalContext();
  console.log(menu)

    return(<div className={ menu?"sidebar showMenu": "sidebar"}>
        <div className="header">
            <img src={logo} alt="logo"/>

            <span onClick={closeMenu}><FaTimes className="times"/></span>
        </div>

     <ul className="link">
      {links.map((link, index)=>{
        return <li key={index}>
           {link.icon} <span>{link.text}</span>
             </li>
      })}
     </ul>
        
        <ul className="socials">
            {social.map((item, index)=>{
              return  <li key={index}> <a href={item.url}> {item.icon}</a></li>
            })}
        </ul>

    </div>)
}