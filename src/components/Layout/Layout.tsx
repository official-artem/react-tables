import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './styles/Layout.style.css';

const Layout: FC = () => {
  return (
      <>
      <header className='header'>
        <nav className='nav'>
          <ul className='header__links'>
            <li className='header__item'>
              <NavLink  className="header__link link-dark link-underline-opacity-0 link-underline-opacity-100-hover" to="">Accounts</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className="header__link link-dark link-underline-opacity-0 link-underline-opacity-100-hover" to="profiles">Profiles</NavLink>
            </li>
            <li className='header__item'>
              <NavLink className="header__link link-dark link-underline-opacity-0 link-underline-opacity-100-hover" to="campaigns">Campaigns</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default Layout