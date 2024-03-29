import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../assets/Abstract-Hills-And-Trees-Logo.svg'

import './header.styles.scss'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
 } from './header.styles';

const Header = ({currentUser,hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT 
                </OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' onClick={()=>auth.signOut()}>Sign Out</OptionLink>
                    :
                    <OptionLink to='/signin'>
                        Sign In
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);