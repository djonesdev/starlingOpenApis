import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { applyMiddleware, createStore } from 'redux'
import reducers from '../redux'

export const mockStore = configureMockStore([thunk]);

function findAction(store, type) {
    return store.getActions().find(action => action.type === type);
}
  
export function getAction(store, type) {
        const action = findAction(store, type);
        if (action) return Promise.resolve(action);
  
    return new Promise(resolve => {
        store.subscribe(() => {
            const action = findAction(store, type);
            if (action) resolve(action);
        });
    });
}


export default function setupStore(initialState) {
  return createStore(reducers, {...initialState}, applyMiddleware(thunk));
}