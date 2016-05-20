import React, { Component } from 'react';
import AppStore from 'stores/AppStore';
import AppActions from 'actions/AppActions';
import Task from 'components/Task';

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
    AppActions.setTitle('New');
  };

  render() {
    return (
      <div className='page-content'>
        <h1>To Do List</h1>
        <Task />
      </div>
    );
  }

}
