import React from 'react';

import CustomButton from '../customButton/customButton.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
};

export default CartDropdown;