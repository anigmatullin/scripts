import React from 'react'
import {useSearchParams} from 'react-router-dom'

import * as data from '../../store/contacts';

export default function ContactsSearch()
{
    const [searchParams, setSearchParams] =  useSearchParams();
    // const theQuery = searchParams.get('q');

    const onSearch = (e) => {
        e.preventDefault();

        const form = e.target;
        const query = form.search.value;

        setSearchParams({q: query});
        data.filter(query);
    }

    return (
        <form autoComplete='off' onSubmit={onSearch}>
        <div className='row mb-3'>
            
            <div className='form-group col-9'>
                <input className='form-control' type="search" name="search" />
            </div>

            <div className="col-2">
                <button type="submit" className='btn btn-primary'>Search</button>
            </div>
                
        </div>
        </form>
    )
}
