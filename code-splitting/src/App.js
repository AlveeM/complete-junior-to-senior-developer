import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    // No Code Splitting
    // this.setState({route: route});
    // Code Splitting
    if (route === 'page1') {
      this.setState({ route: route })
    } else if (route === 'page2') {
      import('./components/Page2')
        .then((Page2) => {
          this.setState( { route: route, component: Page2.default })
        })
    } else if (route === 'page3') {
      import('./components/Page3')
        .then((Page3) => {
          this.setState( { route: route, component: Page3.default })
        })
    }
  }

  render() {
      // No Code Splitting
      // if (this.state.route === 'page1') {
      //   return <Page1 onRouteChange={this.onRouteChange}/>;
      // } else if (this.state.route === 'page2') {
      //   return <Page2 onRouteChange={this.onRouteChange}/>;
      // } else if (this.state.route === 'page3') {
      //   return <Page3 onRouteChange={this.onRouteChange}/>;
      // }

      // Code Splitting
      if (this.state.route === 'page1') {
        return <Page1 onRouteChange={this.onRouteChange} />
      } else {
        return <this.state.component onRouteChange={this.onRouteChange} />
      }
  }
}

export default App;
