import React from 'react';

import CSS from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

class SideDrawer extends React.Component{
    state={
        backdropShow: true
    }

    backDropHandler=()=> this.setState({backdropShow: false})

    render(){
        return (
            <>
                <Backdrop show={this.state.backdropShow}/>
                <div className={CSS.SideDrawer}>
                    <div className={CSS.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </>
        );
    }
}

export default sideDrawer;