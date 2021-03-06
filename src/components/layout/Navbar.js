import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SingInLinks'
import SingedOutLinks from './SingOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SingedInLinks profile={profile} /> : <SingedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className='container'>
        <Link to='/' className='brand-logo left'>React News</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
