import React from 'react'
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../providers/AuthProvider';




const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
   
    if (user) {
      return (
        <>
           <Link to='movies'>
             <li>movies</li>
          </Link>
          <Link to='/reviews'>
             <li>Review</li>
          </Link>


          <li onClick={() => handleLogout() }>
            Logout
          </li>
        </>
      )
    } else {
      return (
        <>

          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;