import {pipe} from 'lodash/fp';
import {store} from './store/bugs';
import * as actions from './store/bugs';


// import { ngmStore } from "./ngmStore.js";

// const ngmstore = new ngmStore(reducer);

// ngmstore.subscribe(() => console.log("Hey! Store Changed!"));
// ngmstore.dispatch(actions.bugAdded("UI Problem!"));
// ngmstore.dispatch(actions.bugAdded("Backend Problem!"));

// console.log(ngmstore.getState());

// ngmstore.dispatch(actions.bugResolved(1));
// console.log(ngmstore.getState());


///////////////////////////


const unsub = store.subscribe(() => console.log("store changed!"));

store.dispatch(actions.bugAdded("UI Problem!"));
store.dispatch(actions.bugAdded("Backend Problem!"));
store.dispatch(actions.bugAdded("Performance Problem!"));
console.log(store.getState());

store.dispatch(actions.bugResolved(1));
console.log(store.getState());

store.dispatch(actions.bugRemoved(1));
console.log(store.getState());

unsub();
