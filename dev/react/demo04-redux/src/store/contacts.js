import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';


const ADD = "add";
const UPDATE = "update";
const REMOVE = "remove";
const FILTER = "filter";


function actionAdd(name, mail)
{
    return {
        type: ADD,
        payload: {
            name,
            mail,
        }
    }
}


function actionUpdate(id, name, mail)
{
    return {
        type: UPDATE,
        payload: {
            id,
            name,
            mail,
        }
    }
}

function actionRemove(id)
{
    return {
        type: REMOVE,
        payload: {
            id
        }
    }
}

function actionFilter(filter)
{
    return {
        type: FILTER,
        payload: {
            filter
        }
    }
}

function initialState()
{
    const data = localStorage.getItem('ngmContacts');
    const filter = "";
    const rows = JSON.parse(data);
    const filteredRows = rows;

    return {
        filter,
        rows,
        filteredRows,
    };
}

export function getCount()
{
    const state = store.getState();
    return state.rows.length;
}

export function getFilteredCount()
{
    const state = store.getState();
    return state.filteredRows.length;
}

function applyFilter(rows, filter = "")
{
    let res;

    if (filter) {

        res = rows.filter((item) => {

            let nameMatch = item.name.search(filter)  !== -1;
            let mailMatch = item.mail.search(filter)  !== -1;

            if (nameMatch || mailMatch) {
                return true;
            }
            else {
                return false;
            }

        });

    }
    else {
        res = rows;
    }

    return res;
}

export function getFilteredContacts()
{
    const state = store.getState();
    return state.filteredRows;
}

export function getContacts()
{
    const state = store.getState();
    return state.rows;
}

export function getContact(id)
{
    const state = store.getState();
    return state.rows.find((item) => item.id === id)
}

function reducer(state, action)
{
    if (state === undefined) {
        return initialState();
    }

    if (!action) {
        return state;
    }

    if (!action.type) {
        return state;
    }

    let filter = state.filter;
    let newRows;

    if (action.type === FILTER) {
        filter = action.payload.filter;
        newRows = state.rows;
    }

    else if (action.type === ADD) {
        newRows = [...state.rows];
        newRows.push({
            id: uuidv4(),
            name: action.payload.name,
            mail: action.payload.mail,
        });
    }

    else if (action.type === UPDATE) {
        newRows = state.rows.map(item => {
            if (item.id !== action.payload.id) {
                return item;
            }
            else {
                return {
                    id: item.id,
                    name: action.payload.name,
                    mail: action.payload.mail,
                };
            }
        })
    }

    else if (action.type === REMOVE) {
        newRows = state.rows.filter(item => {
            return item.id !== action.payload.id
        })
    }

    else {
        newRows = state.rows;
    }

    if (state.rows !== newRows) {
        const serialized = JSON.stringify(newRows);
        window.localStorage.setItem('ngmContacts', serialized);
    }

    return {
        filter,
        rows: newRows,
        filteredRows: applyFilter(newRows, filter)
    };
}



const store = createStore(
    reducer,
    devToolsEnhancer({trace: true})
    );

export function add(name, mail)
{
    const payload = actionAdd(name, mail); 
    store.dispatch(payload);
}

export function update(id, name, mail)
{
    const payload = actionUpdate(id, name, mail);
    store.dispatch(payload);
}

export function remove(id)
{
    const payload = actionRemove(id);
    store.dispatch(payload);
}

export function filter(filter)
{
    const payload = actionFilter(filter);
    store.dispatch(payload);
}


export {reducer};
export {store};
