import React from 'react';

import CSS from './Logo.module.css';
import BurgerLogo from '../../assets/Images/burger-logo.png';

const logo = ( props ) =>  (
        <div className={CSS.Logo}>
            <img src={BurgerLogo} alt="Burger Logo"/>
        </div>
);

export default logo;