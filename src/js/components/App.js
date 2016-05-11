import React, { Component } from 'react';
import AppStore from 'stores/AppStore';
import actions from 'actions/AppActions';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = AppStore.getState();
    AppStore.listen(this.storeDidUpdate);
  }

  storeDidUpdate = () => {
    this.setState(AppStore.getState());
  };

  setTitle = () => {
    actions.setTitle('New');
  };

  render() {
    return(
      <div className='page-content'>
        <h1>{this.state.title}</h1>
        <button onClick={this.setTitle}>Click</button>
      </div>
    )
  }

}
