import dispatcher from 'js/dispatcher';

class TaskActions {
  setTask = (task) => task;
}

export default dispatcher.createActions(TaskActions);
