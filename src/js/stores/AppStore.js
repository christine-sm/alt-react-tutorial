import dispatcher from 'js/dispatcher';
import AppActions from 'actions/AppActions';

// items- array of objects (label, status, unique id, key values pairs)
// id = 0;
// let uuid = () => ++id;
// try to only use props in child components

class AppStore {

  constructor () {
    this.title = 'My Title';
    this.bindListeners({
      setTitle: AppActions.setTitle
    });
  }

  setTitle (title) {
    this.title = title;
    // this.emitChange();
  }

}

export default dispatcher.createStore(AppStore, 'AppStore');
