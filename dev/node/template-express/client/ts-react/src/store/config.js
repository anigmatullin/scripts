// import { v4 as uuidv4 } from 'uuid';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';


const SET = "set";
const storage_key = 'CFG_BASE_URL';


function actionSet(baseurl)
{
    return {
        type: SET,
        payload: {
            BASE_URL: baseurl,
        }
    }
}


function initialState()
{
    const saved_state = localStorage.getItem(storage_key);

    if (saved_state) {
        return saved_state;
    }
    else {
        return {
            BASE_URL: null,
        }
    }
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

    if (action.type === SET) {
        const newstate = {
            BASE_URL: action.payload.BASE_URL,
        };

        const serialized = JSON.stringify(newstate);
        window.localStorage.setItem(storage_key, serialized);

        return newstate;
    }
    else {
        return state;
    }

}


const store = createStore(
    reducer,
    devToolsEnhancer({trace: true})
    );


export function set(url)
{
    const payload = actionSet(url);
    store.dispatch(payload);
}

export function getBaseUrl()
{
    const state = store.getState();
    return state.BASE_URL;
}

export {reducer};
export {store};
