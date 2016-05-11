import React, { Component } from 'react';
import AppStore from 'stores/AppStore';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = AppStore.getState();
    AppStore.listen(this.storeDidUpdate);
  }

  storeDidUpdate = () => {
    this.setState(AppStore.getState());
  };

  render() {
    return(
      <div className='page-content'>
        <h1>{this.state.title}</h1>
      </div>
    )
  }

}
