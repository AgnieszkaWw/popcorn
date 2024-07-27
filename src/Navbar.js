import React from 'react'
import Logo from './Logo';
import Search from './Search';
import NumResult from './NumResult';
export default function Navbar() {
    
  return (
    <nav className="nav-bar">
    <Logo />
    <Search />
    <NumResult />
  </nav>
  )
}
