import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
     <Layout>
       <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" component={BurgerBuilder}/>
       </Switch>
     </Layout>
    </div>
  );
}

export default App;



// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     show: true
//   }

//   componentDidMount(){
//     setTimeout(() => this.setState({show: false}), 5000);
//   }

//   render() {
//     return (
//       <div>
//         <Layout>
//           {this.state.show ? <BurgerBuilder/> : null}
//         </Layout>
//       </div>
//     );
//   }
// }

// export default App;




