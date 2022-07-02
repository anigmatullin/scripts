import React from 'react';
import { Formik, Form, FormikErrors, FormikValues } from 'formik';

import AuthService from '../../services/AuthService';
import InputText from './elements/InputText';
import InputPassword from './elements/InputPassword';
import ButtonSubmit from './elements/ButtonSubmit';


type LoginProps = {
    message: string;
}

interface Values extends FormikValues {
    user: string;
    pass: string;
}

const initialValues: Values = {
    user: '',
    pass: '',
}

export default function Login(props: LoginProps)
{
    function validate(values: Values)
    {
        let errors: FormikErrors<Values> = {};

        if (!values.user) {
            errors.user = 'Required';
        }

        if (!values.pass) {
            errors.pass = 'Required';
        }

        return errors;
    };
    
    function onSubmit(values: Values)
    {
        // do submitting things

        const user = values.user;
        const pass = values.pass;

        AuthService.login(user, pass);
    };

    return (
    <div className="row">
    <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        >

        <Form className='col-8 m-4'>
            <h3>{props.message}</h3>

            <InputText name="user" label="User" />
            <InputPassword name="pass" label="Password" />
            <ButtonSubmit name="Login" />

        </Form>

    </Formik>
    </div>
    )
}
