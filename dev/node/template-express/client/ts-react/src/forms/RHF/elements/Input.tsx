import React from 'react'
import { ChangeHandler } from 'react-hook-form'


// name: "user"
// onBlur: async event => {…}
// onChange: async event => {…}
// ref: ref => {…}

type InputProps = {
    type: string,
    label: string,
    errors: string,

    name: string,
    // ref: React.Ref<any>,
    onBlur: ChangeHandler,
    onChange: ChangeHandler,
}
   

export default function Input(props: InputProps)
{
  return (

    <div className='form-group mt-3'>
                    
        <label>{props.label}:</label>
        <input id={props.name} className='form-control' {...props} />
        <div className='text-danger'>{props.errors}</div>

    </div>
  )
}


// export default React.forwardRef((props, ref) => {
//     return <Input ref={ref}  {...props} />
// });
