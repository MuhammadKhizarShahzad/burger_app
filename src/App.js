import React from 'react';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
     <Layout>
      <BurgerBuilder/>
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




