import React from "react";
// Style
import "./menu.css";
// Libs
import Link from "next/link";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { options } from "./menu.utils";

const Menu = () => {
  return (
    <header className="container-navbar">
      <ul className="container-ul-header">
        {options?.map((item) => (
          <li key={`${item.text}-${item.href}`}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className='container-phone-menu'>
        <PhoneEnabledIcon />
        <p className='phone-menu'>321 - 4822797</p>
      </div>
    </header>
  );
};

export default Menu;
