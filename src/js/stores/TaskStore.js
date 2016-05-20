import dispatcher from 'js/dispatcher';
import taskActions from 'actions/TaskActions';
class TaskStore {

  constructor () {
    this.task = [
      {
        label: 'Task One',
        isChecked: false,
        uuid: 1
      },
      {
        label: 'Task 2',
        isChecked: false,
        uuid: 2
      }
    ];
    this.bindListeners({
      setTask: taskActions.setTask
    });
  }

  setTask (task) {
    this.task = task;
    this.emitChange();
  }

}

export default dispatcher.createStore(TaskStore, 'TaskStore');
