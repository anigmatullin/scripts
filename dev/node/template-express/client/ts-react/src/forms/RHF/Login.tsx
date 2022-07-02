import React from 'react'
import { useForm } from 'react-hook-form'

import Input from './elements/Input'

type Values = {
    user: string,
    pass: string,
}

export default function Login()
{
    const frm = useForm<Values>({mode: 'onChange'});
    const register = frm.register;
    const handleSubmit = frm.handleSubmit;
    const formState = frm.formState;

    function onSubmit(data: Values)
    {
        console.log(data);
        frm.reset();
    }

    function checkErrors(field: 'user' | 'pass'): string
    {
        const defaultMsg = 'Error!';
        const err = formState.errors[field];

        if (err) {
            return err.message || defaultMsg;
        }

        //No Errors for this field
        //Return empty
        return '';
    }

    // const attrsUser = register('user', {
    //     required: 'Required field',
    //     minLength: {
    //         value: 5,
    //         message: 'Minimum 5 symbols'
    //     }
    // });


    return (
    <div className='row'>
        <form onSubmit={handleSubmit(onSubmit)} className='col-8 m-3'>

            {/* <Input
                type="text"
                label='User'
                errors={checkErrors('user')} 
                {...register('user', {
                    required: 'Required field',
                    minLength: {
                        value: 5,
                        message: 'Minimum 5 symbols'
                    }
                })}
            /> */}

            <div className='form-group mt-3'>
                
                <label>User:</label>
                
                <input
                    {...register('user', {
                        required: 'Required field',
                        minLength: {
                            value: 5,
                            message: 'Minimum 5 symbols'
                        }
                    })}
                    className='form-control'
                    type="text"
                    name="user"
                    id="user"
                />
                
                <div className='text-danger'>{checkErrors('user')}</div>

            </div>

            <div className='form-group mt-3'>
                
                <label>Pass:</label>

                <input
                    {...register('pass', {
                        required: 'Required field',
                        minLength: {
                            value: 5,
                            message: 'Minimum 5 symbols'
                        }
                    })}
                    className='form-control'
                    type="password"
                    name="pass"
                    id="pass"
                />
                
                <div className='text-danger'>{checkErrors('pass')}</div>

            </div>

            <input type="submit" value="Login"  disabled={!frm.formState.isValid || frm.formState.isSubmitting}  className='btn btn-primary mt-3' />
        </form>
    </div>
    )
}
