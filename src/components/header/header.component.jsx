import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/Abstract-Hills-And-Trees-Logo.svg'

import './header.styles.scss'

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT 
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin'>
                        Sign In
                    </Link>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);