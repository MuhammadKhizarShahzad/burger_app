import React, { Component } from 'react';

import CSS from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log("ShouldUpdate [Modal.js]")
        return nextProps.show !== this.props.show || 
        nextProps.children !== this.props.children;
    }

    render() {
        return (
            <>
            <Backdrop 
                    clicked={this.props.clicked}
                    show={this.props.show}/>
            <div className={CSS.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>

                {this.props.children}
            </div>
            </>
        );
    }
}

export default Modal;