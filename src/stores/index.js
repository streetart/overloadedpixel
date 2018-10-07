import { configure } from 'mobx';
import UserStore from "./userStore";
import SessionStore from "./sessionStore";


configure({ enforceActions: true });

class RootStore {

    constructor() {
        this.sessionStore = new SessionStore(this);
        this.userStore = new UserStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
