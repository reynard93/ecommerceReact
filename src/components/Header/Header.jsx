import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
//above is special syntax in React for importing SVG
import './Header.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to="/" className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?  
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </div>
)

//mapstatetoprops can be named anything but the naming here is standard with redux codebases
//state is the top level reducer (i.e. root reducer)
const mapStateToProps = (state) => {
  currentUser: state.user.currentUser;
}

export default connect(mapStateToProps)(Header);
