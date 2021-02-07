import React, {Component} from "react";
import { CustomField } from "../../components/CustomField/CustomField";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {BlueLink} from "../../components/BlueLink/BlueLink";
import {notEmpty, mailValidation} from "../../validators/validators";
import "./authForm.scss"
import '../../components/BlueLinkButton/blueLinkButton.scss';

const styles = {
    blueLink : {
        display:"flex",
        justifyContent:"center",
        margin:"25px 0 25px 0"
    },
    blueLinkButton : {
        margin:"25px 0 25px 0",
        width: "100%"
    }
}

const AuthForm = props => {
    const { error, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={'center'}>
                <div className={'column w100'}>
                    <Field
                        label={"Email"}
                        name={"login"}
                        component={CustomField}
                        type={'text'}
                        validate={[mailValidation, notEmpty]}
                    />
                    <Field
                        label={"Пароль"}
                        component={CustomField}
                        name={"pwd"}
                        type={'password'}
                        validate={[notEmpty]}
                    />
                    {error && <label className="error">{error}</label>}
                    <button>
                        <div style={styles.blueLinkButton} className={'blue-link-btn'} >
                            Войти в аккаунт
                        </div>
                    </button>
                    <BlueLink style={styles.blueLink} to={"/forgot"} text={'Забыли пароль?'} />
                </div>
            </div>
        </form>
    );

}

export default reduxForm({
    form : "auth"
})(AuthForm)

