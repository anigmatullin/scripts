import React, {useState} from 'react';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router';

import * as data from '../store/contacts';

export default function FormContact(props)
{
    ////////////////////////////////////////

    const [version, setVersion] = useState(0);
    
    React.useEffect(() => {

        const unsub = data.store.subscribe(() => {
            setVersion(version + 1);
        });

        return () => {
            unsub();
        };

    }, []);

    ////////////////////////////////////////

    const params = useParams();
    const id = params.id;
    const obj = data.getContact(id);

    let initialValues;

    if (obj) {
        initialValues = {
            id: obj.id,
            name: obj.name,
            mail: obj.mail,
        }
    }
    else {
        initialValues = {
            id: "",
            name: "",
            mail: "",
        }
    }

    ////////////////////////////////////////

    const nav = useNavigate();

    ////////////////////////////////////////

    const onSubmit = (values) => {

        if (props.action === "Add") {
            data.add(values.name, values.mail);
        }
        else if (props.action === "Update") {
            data.update(values.id, values.name, values.mail);
        }

        if (props.go) {
            nav(props.go);
        }
    }

    ////////////////////////////////////////

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length > 15) {
          errors.name = 'Must be 15 characters or less';
        }
      
        // if (!values.lastName) {
        //   errors.lastName = 'Required';
        // } else if (values.lastName.length > 20) {
        //   errors.lastName = 'Must be 20 characters or less';
        // }
      
        if (!values.mail) {
          errors.mail = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
          errors.mail = 'Invalid email address';
        }
      
        return errors;
      };

    ////////////////////////////////////////

    const formik = useFormik({initialValues, validate, onSubmit});
    const {handleSubmit, handleChange, values, errors} = formik;

    return (
        <div className=''>
            <h3>{props.action} Contact</h3>
            <form autoComplete='off' onSubmit={handleSubmit}>

            <div className='form-group mt-3'>
                <label>Name</label>
                <input
                    id="name"
                    type="text"
                    className='form-control'
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? <div className='formValidatonErr'>{formik.errors.name}</div> : null}
            </div>

            <div className='form-group mt-3'>
                <label>Mail</label>
                <input
                    id="mail"
                    type="email"
                    className='form-control'
                    {...formik.getFieldProps('mail')}
                />
                {formik.touched.mail && formik.errors.mail ? <div  className='formValidatonErr'>{formik.errors.mail}</div> : null}
            </div>

            <div className='form-group mt-3'>
                <button type="submit" className='btn btn-success'>{props.action}</button>
            </div>
                
            </form>

        </div>
    )
}
