import React from 'react'

export const Navbar: React.FunctionComponent = () => {
  return(
    <nav>
    <div className="nav-wrapper px-1">
      <a href="#" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Список дел</a></li>
        <li><a href="badges.html">Информация</a></li>
      </ul>
    </div>
  </nav>
  )
}