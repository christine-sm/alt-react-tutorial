import React, { Component } from 'react';
import TaskStore from 'stores/TaskStore';
import TaskActions from 'actions/TaskActions';

export default class App extends Component {

  // constructor (props) {
  //   super(props);
  //   this.state = TaskStore.getState();
  //   TaskStore.listen(this.storeDidUpdate);
  // }
  //
  // storeDidUpdate = () => {
  //   this.setState(TaskStore.getState());
  // };
  //
  // setTitle = () => {
  //   TaskActions.setTitle('New');
  // };

  render() {
    return (
      <div>
        <input type='text' placeholder='New Task'/>
        <button>Add</button>
        <h2>Tasks</h2>
        <ul>
          <li>Task 1<input type ='checkbox'/></li>
          <li>Task 2<input type ='checkbox'/></li>
        </ul>
        <button>Delete Completed Tasks</button>
      </div>
    );
  }

}
