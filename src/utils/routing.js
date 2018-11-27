import { createBrowserHistory } from 'history';

class Routing {
  constructor() {
    this.history = createBrowserHistory();
    this.callbacks = [];

    this.history.listen(({ pathname }) => this.handlePathChange(pathname));
  }

  get pathname() {
    return this.history.location.pathname;
  }

  moveTo(pathname) {
    this.history.push(pathname);
  }

  handlePathChange(pathname) {
    this.callbacks.forEach(cb => {
      if (typeof cb === 'function') {
        cb(pathname);
      }
    });
  }

  onChange(cb) {
    this.callbacks.push(cb);
    return () => (this.callbacks = this.callbacks.filter(it => it !== cb));
  }
}

export default new Routing();
