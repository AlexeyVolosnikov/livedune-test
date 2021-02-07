import React, {Component} from "react";
import {BlueLink} from "../../components/BlueLink/BlueLink";
import {Promocode} from "../../components/Promocode/Promocode";

import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { CustomField } from "../../components/CustomField/CustomField";

import {notEmpty, politeMailValidation} from "../../validators/validators";

import "./regForm.scss"
import '../../components/BlueLinkButton/blueLinkButton.scss';
import handleSubmit from "redux-form/lib/handleSubmit";

const styles = {
    blueLink : {
        display:"flex",
        justifyContent:"center",
        margin:"25px 0 25px 0"
    },
    blueLinkButton : {
        margin:"25px 0 25px 0",
        width: "100%"
    },
    promo : {
        display:"flex",
        justifyContent: "center",
        margin:"8px 0 10px 0"
    }
}

const RegForm = props => {
    const { error, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={'center'}>
                <div className={'column w100'}>
                    <Field
                        label={"Имя"}
                        name={"name"}
                        component={CustomField}
                        type={'text'}
                        validate={[notEmpty]}
                    />
                    <Field
                        label={"Email"}
                        name={"login"}
                        component={CustomField}
                        type={'text'}
                        validate={[politeMailValidation, notEmpty]}
                    />
                    <Field
                        label={"Пароль"}
                        component={CustomField}
                        name={"pwd"}
                        type={'password'}
                        validate={[notEmpty]}
                    />
                    <Promocode style={styles.promo}  />
                    <button>
                        <div style={styles.blueLinkButton} className={'blue-link-btn'} >
                            Создать аккаунт
                        </div>
                    </button>
                    <div className="space-between center flex-wrap">
                        <div className={"center-column space-right"}>
                            <b>Создавая аккаунт, я согласен с</b>
                        </div>
                        <BlueLink style={styles.blueLink} to={"/reg"} text={'условиями оферты'} />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form : "reg"
})(RegForm)
