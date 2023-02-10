import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          Welcome, {user.name}
          <ul className='userLinks'>
            <><Link to='/profiles'>Profiles</Link></>
            <><Link to='/fortunes'>Fortunes</Link></>
            <><Link to='/signs'>Signs</Link></>
            <><Link to='/blogs'>Blogs</Link></>
          </ul>
          <><Link to='' onClick={handleLogout}>LOG OUT</Link></>
        </ul>
        :
        <ul>
          <><Link to='/fortunes'>Fortunes</Link></>
          <><Link to='/login'>Log In</Link></>
          <><Link to='/signup'>Sign Up</Link></>
        </ul>
      }
    </nav>
  )
}

export default NavBar
