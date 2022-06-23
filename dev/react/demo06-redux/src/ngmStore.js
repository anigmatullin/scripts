export class ngmStore
{
    #state = undefined;
    #subscriptions = [];
    #reducer = null;

    constructor(reducer)
    {
        if (!reducer) {
            throw "Reducer must be provided";
        }

        this.#reducer = reducer;
        this.dispatch(null);

        console.log("Initial State:");
        console.log(this.#state);
    }

    getState()
    {
        return this.#state;
    }

    #setState(newState)
    {
        this.#state = newState;

        for (let i=0; i<this.#subscriptions.length; i++)
        {
            const fn = this.#subscriptions[i];
            fn(this.#state);
        }
    }

    subscribe(fn)
    {
        this.#subscriptions.push(fn);
    }

    replaceReducer(reducer)
    {
        this.#reducer = reducer;
    }

    dispatch(action)
    {
        if (!this.#reducer) {
            return;
        }

        const newState = this.#reducer(this.#state, action);
        this.#setState(newState);
    }
}
