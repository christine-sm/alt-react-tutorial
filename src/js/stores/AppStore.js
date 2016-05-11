import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {
    this.title = 'My Title';

  }

}

export default dispatcher.createStore(AppStore, 'AppStore');
