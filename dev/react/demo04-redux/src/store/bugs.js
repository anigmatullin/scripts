import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';


const ADD = "add";
const UPDATE = "update";
const REMOVE = "remove";
const FILTER = "filter";
const RESOLVE = "resolve";

const StorageKey = 'ngmBugs';


function actionAdd(values)
{
    return {
        type: ADD,
        payload: {
            ...values
        }
    }
}


function actionUpdate(id, values)
{
    return {
        type: UPDATE,
        payload: {
            id,
            ...values,
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

function actionResolve(id)
{
    return {
        type: RESOLVE,
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
    const data = localStorage.getItem(StorageKey);

    if (data) {
        const filter = "";
        const rows = JSON.parse(data);
        const filteredRows = rows;
    
        return {
            filter,
            rows,
            filteredRows,
        };
    }
    else {
        return {
            filter: "",
            rows: [],
            filteredRows: [],
        };
    }

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

            let productMatch = item.product.search(filter)  !== -1;
            let areaMatch = item.area.search(filter)  !== -1;
            let descMatch = item.description.search(filter)  !== -1;

            if (productMatch || areaMatch || descMatch) {
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

export function getFilteredRows()
{
    const state = store.getState();
    return state.filteredRows;
}

export function getRows()
{
    const state = store.getState();
    return state.rows;
}

export function getOne(id)
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
            ...action.payload,
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
                    ...action.payload,
                };
            }
        })
    }

    else if (action.type === RESOLVE) {
        newRows = state.rows.map(item => {
            if (item.id !== action.payload.id) {
                return item;
            }
            else {
                return {
                    ...item,
                    resolved: true,
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
        window.localStorage.setItem(StorageKey, serialized);
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

export function add(values)
{
    const payload = actionAdd(values); 
    store.dispatch(payload);
}

export function update(id, values)
{
    const payload = actionUpdate(id, values);
    store.dispatch(payload);
}

export function remove(id)
{
    const payload = actionRemove(id);
    store.dispatch(payload);
}

export function resolve(id)
{
    const payload = actionResolve(id);
    store.dispatch(payload);
}

export function filter(filter)
{
    const payload = actionFilter(filter);
    store.dispatch(payload);
}


export {reducer};
export {store};
