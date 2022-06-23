import React from 'react'
import * as bugs from '../store/bugs';

function BugsCreate(props)
{

    function handleSubmit(e)
    {
        e.preventDefault();

        const form = e.target;
        const desc = form.description.value;
        form.description.value = "";
        console.log(desc);

        bugs.bugAdd(desc);

        // bugs.store.dispatch(bugs.bugAdded(desc));
    }

    return <div>
        <h5>New Bug</h5>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>
                    Description
                </label>
                <input className="form-control" type="text" name="description" id="" />
            </div>
        </form>
    </div>
}

export {BugsCreate};
