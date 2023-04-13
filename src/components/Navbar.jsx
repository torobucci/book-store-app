import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import style from './styles/Navbar.module.css';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];
function NavBar() {
  return (
    <nav className={style['nav-bar']}>
      <h1 className={style['nav-brand']}>Book Store CMS</h1>
      <ul className={style['nav-links']}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className={style['icon-button']}><FontAwesomeIcon icon={faUser} className={style['fa-user']} aria-label="user-icon" /></button>
    </nav>
  );
}
export default NavBar;
