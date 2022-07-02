import React from 'react';
import {useField} from 'formik';

type InputTextProps = {
    label: string,
    name: string,
    placeholder?: string,
}

export default function InputText(props: InputTextProps)
{
    const [field, meta, helpers] = useField(props);

    // console.log(meta.touched);

    return (

        <div className='form-group mt-3'>
        <label>{props.label}</label>
        <input
            id={field.name}
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}

            type="text"
            className='form-control'
            placeholder={props.placeholder}
        />
        {meta.touched && meta.error ? <div className='formValidatonErr'>{meta.error}</div> : null}
        </div>

  )
}
