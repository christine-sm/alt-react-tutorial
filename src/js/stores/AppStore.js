import dispatcher from 'js/dispatcher';
import actions from 'actions/AppActions';

class AppStore {

  constructor () {
    this.title = 'My Title';
    this.bindListeners({
      setTitle: actions.setTitle
    });
  }

  setTitle (title) {
    this.title = title;
    // this.emitChange();
  }

}

export default dispatcher.createStore(AppStore, 'AppStore');
