import { Link } from 'react-router-dom'
// import styles from './NavBar.module.css' //! Import CSS to here reminder
// import Logo from '../../assets/branding/logo.svg' //! Import logo to here reminder

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to='/profiles'>Profiles</Link></li>
          <li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to='/change-password'>Change Password</Link></li>
          <li><Link to='/fortunes'>Fortunes</Link></li>
        </ul>
        :
        <ul>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
