import dispatcher from 'js/dispatcher';

class AppActions {
  setTitle = (title) => title;
}

export default dispatcher.createActions(AppActions);
