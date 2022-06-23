import React from 'react'
import { useState } from 'react';
import * as data from '../../store/bugs';
import {Link} from 'react-router-dom';

function BugsList(props)
{
    const [version, setVersion] = useState(0);

    data.store.subscribe(() => {
        setVersion(version + 1);
    });

    const rows = data.getRows();

    ////////////////////////////////////////

    const bugList = rows.map(item => {
        return (
        <tr key={item.id}>

            <td>{item.product}</td>
            <td>{item.area}</td>
            <td>{item.description}</td>

            <td>{item.assignedTo}</td>
            <td>{item.resolved ? "Yes" : "No"}</td>

            <td>
                <a className="action" onClick={() => data.remove(item.id)}>Delete</a>
                &nbsp; | &nbsp;
                <Link className="action" to={`/bugs/update/${item.id}`}>Edit</Link>
                &nbsp; | &nbsp;
                <a className="action" onClick={() => data.resolve(item.id)}>Resolve</a>

                {/* <Link className="action" to={`/bugs/resolve/${item.id}`}>Resolve</Link> */}
            </td>
        </tr>
        )
    })

    return <div>
        <table className='table table-bordered border-primary'>
            <thead className='data'>
                <tr>

                    <th>Product</th>
                    <th>Area</th>
                    <th>Description</th>

                    <th>Assined To</th>
                    <th>Resolved</th>

                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
            {bugList}
            </tbody>
        </table>
    </div>
}

export default BugsList;
