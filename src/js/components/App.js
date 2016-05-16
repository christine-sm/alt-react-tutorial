import React, { Component } from 'react';
import AppStore from 'stores/AppStore';
import appActions from 'actions/AppActions';

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
    appActions.setTitle('New');
  };

  render() {
    return(
      <div className='page-content'>
        <h1>To Do List</h1>
        <input type='text' placeholder='New Task'/>
        <button>Add</button>
        <h2>Tasks</h2>
        <ul>
          <li>Task 1<input type ='checkbox'/></li>
          <li>Task 2<input type ='checkbox'/></li>
        </ul>
        <button>Delete Completed Tasks</button>
        <h1>{this.state.title}</h1>
        <button onClick={this.setTitle}>Click</button>
      </div>
    )
  }

}
