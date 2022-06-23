import React, {useState} from 'react';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router';

import TextInput from '../components/elements/TextInput';
import ButtonSubmit from '../components/elements/ButtonSubmit';
import Form from '../components/elements/Form';
import TextArea from '../components/elements/TextArea';

import * as data from '../store/bugs';


export default function FormBug(props)
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

    const obj = data.getOne(id);
    // const obj = false;

    let initialValues;

    if (obj) {
        initialValues = {
            ...obj
        }
    }
    else {
        initialValues = {
            product: "",
            area: "",
            description: "",
            steps: "",
            assignedTo: "",
            resolved: false,
            severity: 1,
        }
    }

    ////////////////////////////////////////

    const nav = useNavigate();

    ////////////////////////////////////////

    const onSubmit = (values) => {

        if (props.action === "Add") {
            data.add(values);
        }
        else if (props.action === "Update") {
            data.update(values.id, values);
        }

        if (props.go) {
            nav(props.go);
        }
    }

    ////////////////////////////////////////

    const validate = values => {

        const errors = {};

        if (!values.description) {
          errors.description = 'Required';
        } else if (values.description.length > 15) {
          errors.name = 'Must be 15 characters or less';
        }
      
        return errors;
      };

    ////////////////////////////////////////

    const formik = useFormik({initialValues, validate, onSubmit});
    const {handleSubmit, handleChange, values, errors} = formik;

    return (

        <Form onsubmit={handleSubmit} name={`${props.action} Bug`}>

            <TextInput formik={formik} name="product"  label="Product" />

            <TextInput formik={formik} name="area"  label="Area" />

            <TextInput formik={formik} name="description"  label="Description" />

            <TextArea formik={formik} name="steps"  label="Steps to Reproduce" />

            <ButtonSubmit name={props.action} />

        </Form>

    )
}
