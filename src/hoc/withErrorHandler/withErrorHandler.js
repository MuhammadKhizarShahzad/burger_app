import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, Axios ) => {
    return class extends React.Component{
        state = {
            error: null,
            data: null
        }

        UNSAFE_componentWillMount(){
            this.reqInterceptor = Axios.interceptors.request.use( req => {
                this.setState({error: null})
                return req;
            }, null );
            this.resInterceptor = Axios.interceptors.response.use(null, err => {
                console.log(" Response Error : ", err);
                this.setState({error: err});
                return Promise.reject(err);
            });
        }

        componentWillUnmount(){
            console.log("Interceptors are Unmounted", this.reqInterceptor, this.resInterceptor)
            Axios.interceptors.request.eject(this.reqInterceptor);
            Axios.interceptors.response.eject(this.resInterceptor);
            console.log("Interceptors are Unmounted", this.reqInterceptor, this.resInterceptor)
        }   

        errorConfirmHandler = () => this.setState({error: null});

        render(){
            return(
                <>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmHandler}
                    >
                        {this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
           );
        }
    }
    
};

export default withErrorHandler;