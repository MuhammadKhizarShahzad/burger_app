import React from 'react';

import CSS from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{
    state = {
        sideMenuShow: false
    }

    sideMenuCloseHandler = () => this.setState({sideMenuShow: false});
    
    toggleSideMenuHandler = () => (
        this.setState( (prevState) => ( {sideMenuShow: !this.state.sideMenuShow } ) )
    );
    
    render(){

        return(
            <>
                <Toolbar sideMenuToggle={this.toggleSideMenuHandler}/>
                <SideDrawer 
                    menu={this.state.sideMenuShow}
                    closeSideMenu={this.sideMenuCloseHandler}
                />
                <main className={CSS.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;