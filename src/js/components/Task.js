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
      <h2>Tasks</h2>
      //   <button>Delete Completed Tasks</button>
      //   <h1>{this.state.title}</h1>
      //   <button onClick={this.setTitle}>Click</button>
      // </div>
    );
  }

}
