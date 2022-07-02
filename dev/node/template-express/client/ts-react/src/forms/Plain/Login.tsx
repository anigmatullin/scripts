import React from 'react'
import { useState } from 'react'

import InputText from './elements/InputText'
import Button from './elements/Button'

type Values = {
    user: {
        value: string
    },

    pass: {
        value: string
    },
}

type ErrorContainer = {
    user: string,
    pass: string,
}

// type CheckerFunction = (field: 'user' | 'pass') => string;

// function getChecker(field: 'user' | 'pass'): CheckerFunction
// {
//     return function (): string
//     {
//         if (errState[field]) {
//             return errState[field];
//         }
//         else {
//             return "";
//         }
//     }
// }

export default function Login()
{

    const [errState, setErrState] = useState<ErrorContainer>({
        user: "",
        pass: "",
    });


    function checkErrors(field: 'user' | 'pass'): string
    {
        if (errState[field]) {
            return errState[field];
        }
        else {
            return "";
        }
    }


    function validate(data: Values): boolean
    {
        let res = true;
        const newErrState = {
            user: "",
            pass: "",    
        }

        if (!data.user.value) {
            newErrState.user = "Required field";
            res = false;
        }
        
        if (!data.pass.value) {
            newErrState.pass = "Required field";
            res = false;
        }

        setErrState(newErrState);

        return res;
    }


    function onSubmit(ev: React.SyntheticEvent)
    {
        ev.preventDefault();
        const target = ev.target as Values & typeof ev.target;

        if (validate(target)) {
            console.log(target.user.value);
            console.log(target.pass.value);
        }
    }


    return (
    <div className='row'>
        <form onSubmit={onSubmit} className='col-8 m-3'>

        <InputText type="text"     name='user' label='User'     errors={checkErrors('user')} />
        <InputText type="password" name='pass' label='Password' errors={checkErrors('pass')} />
        <Button type='submit' name='Login' />

        </form>
    </div>
    )
}
