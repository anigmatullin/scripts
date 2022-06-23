import React from 'react'

export default function TextArea(props)
{
    const formik = props.formik;

    return (

        <div className='form-group mt-3'>
        <label>{props.label}</label>
        <textarea
            rows="10"
            id={props.name}
            type="text"
            className='form-control'
            {...formik.getFieldProps(props.name)}
        />
        {formik.touched[props.name] && formik.errors[props.name] ? <div className='formValidatonErr'>{formik.errors[props.name]}</div> : null}
        </div>

  )
}
