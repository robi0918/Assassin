import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaDiscord} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//" target='_blank' className='nav-link'><FaDiscord /></Link></li>
        <li onClick={handleNav} ><Link  to="//" target='_blank' className='nav-link'><FaTelegram /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/robi0918" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="goldclock0918@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
