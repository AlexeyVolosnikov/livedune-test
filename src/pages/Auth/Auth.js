import React, { Component } from 'react';
import {Header} from "../../components/Header/Header";
import {EnterVia} from "../../components/EnterVia/EnterVia";
import AuthForm from "../../forms/AuthForm/AuthForm";
import {account} from "../../validators/validators";
import { SubmissionError } from 'redux-form'
import './auth.scss';


export class Auth extends Component{
    constructor() {
        super();
        this.state = {
            error : ""
        }
        this.onSubmitAuth = this.onSubmitAuth.bind(this);
    }
    onSubmitAuth () {
        const values = this.props.store.getState().form.auth.values
        if (values === undefined || account === undefined) {
            throw new SubmissionError({
                login: 'Поля не могут быть пустыми',
                _error: ''
            })
        }
        if (values.login === account.login && values.pwd === account.pwd) {
            alert("Успешная авторизация!")
        }
        else {
            alert("Неверно введен логин или пароль!")
        }
    }
    render() {
        return (
            <div >
                <Header page={'auth'} />
                <div className="center">
                    <div className="column auth-wrapper">
                        <div className={"big-title center"}>
                            Войти
                        </div>
                        <div className="center grey-greets">
                            Добро пожаловать, рады видеть вас снова 👋
                        </div>
                        <EnterVia />
                        <div className={"center text-padding-or grey-greets"}>
                            Или
                        </div>
                        <AuthForm onSubmit={this.onSubmitAuth} />
                    </div>
                </div>
            </div>
        );
    }

}
