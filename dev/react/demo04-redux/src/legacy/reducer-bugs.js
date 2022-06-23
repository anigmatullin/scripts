import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import React from "react";
import { useContext } from "react";

const BugsContext = React.createContext(null);

function useBugs()
{
    return useContext(BugsContext);
}

const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";


export function bugAdded(description)
{
    return {
        type: BUG_ADDED,
        payload: {
            description
        }
    }
}


export function bugRemoved(id)
{
    return {
        type: BUG_REMOVED,
        payload: {
            id
        }
    }
}

export function bugResolved(id)
{
    return {
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }
}


// state = []

let nextid = 1;

function getID()
{
    return nextid++;
}

function reducer(state, action)
{
    let newState;

    if (state === undefined) {
        return [];
    }

    if (!action) {
        return state;
    }

    if (!action.type) {
        return state;
    }

    if (action.type === BUG_ADDED) {
        newState = [...state];
        newState.push({
            id: uuidv4(),
            // id: getID(),
            resolved: false,
            description: action.payload.description,
        });
    }
    else if (action.type === BUG_RESOLVED) {
        newState = state.map(bug => {
            if (bug.id !== action.payload.id) {
                return bug;
            }
            else {
                return {...bug, resolved: true};
            }
        })
    }
    else if (action.type === BUG_REMOVED) {
        newState = state.filter(bug => {
            return bug.id !== action.payload.id
        })
    }
    else {
        newState = state;
    }

    return newState;
}



const store = createStore(
    reducer,
    devToolsEnhancer({trace: true})
    );

export function bugAdd(desc)
{
    store.dispatch(bugAdded(desc));
}

export function bugResolve(id)
{
    store.dispatch(bugResolved(id));  
}

export function bugRemove(id)
{
    store.dispatch(bugRemoved(id));  
}


export {reducer};
export {store};
export {BugsContext};
export {useBugs};
