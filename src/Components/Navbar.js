import React from 'react';
import { useState } from 'react';
import "./Navbar.css";
import { LuListTodo } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import DropDownmenu from './DropDownmenu';
// import DropdownMenu from './DropdownMenu';

const Navbar = () => {
    // const dropdown=<DropdownMenu  options={["signin","signup"]}/>
    const menu=["Home","health","entertainment","sports","science","technology"];
    const [click,setclick]=useState(false);
    const HandleClick=()=>{
        setclick(!click);
    }
    return (
    <div className="navbar">
        <div className="logo"><LuListTodo className='logo'></LuListTodo></div>
        <div className="menus">
        <div className="menuu">
            <ul className={click?"menu active":"menu"}>
            {menu.map((el,id)=>{
                return <li id={id}><a href={`/${el}`}>{el}</a></li>
            })}
            {/* <li><DropDownmenu/></li> */}
            </ul>
        </div>
        <div className="hamcross" onClick={HandleClick}>
            {click?<div className="cross"><ImCross className='cross'></ImCross></div>:<div className="ham"><GiHamburgerMenu className='ham'></GiHamburgerMenu></div>}
        </div>
        </div>
    </div>
  )
}

export default Navbar