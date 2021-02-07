import React, {Component} from 'react';
import ForgotPasswordForm from "../../forms/ForgotPasswordForm/ForgotPasswordForm";
import {GreyText} from "../../components/GreyText/GreyText";
import {Header} from "../../components/Header/Header";
import {account} from "../../validators/validators";
import { useHistory } from 'react-router-dom'
import './forgotPassword.scss';

export const ForgotPassword = props => {

    let history = useHistory();

    const onSubmit = () => {
        const values = props.store.getState().form.forgotPassword.values
        if (account.login === values.login) {
            history.push("/sent");
        }
        else {
            alert("Пароль может быть восстановлен только на example@example.com")
        }
    }
    return (
        <div>
            <Header page={"missed"} />
            <div className="center block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.3939 0C33.6575 0 20.0908 13.5667 20.0908 30.303V60.6061H32.212V30.303C32.212 20.2636 40.3514 12.1212 50.3939 12.1212C60.4363 12.1212 68.5757 20.2636 68.5757 30.303V60.6061H80.6969V30.303C80.6969 13.5667 67.1302 0 50.3939 0Z" fill="#D1D1DB"/>
                    <path d="M89.7879 87.8788C89.7879 94.5727 84.3606 100 77.6667 100H23.1212C16.4273 100 11 94.5727 11 87.8788V51.5151C11 44.8212 16.4273 39.3939 23.1212 39.3939H77.6667C84.3606 39.3939 89.7879 44.8212 89.7879 51.5151V87.8788Z" fill="#F2F2F7"/>
                </svg>
            </div>
            <div className="center">
                <label className="medium-title">
                    Восстановить пароль
                </label>
            </div>
            <div className="center grey-label">
                <GreyText text={"Введите e-mail, на который регистрировались ранее"}/>
            </div>

            <ForgotPasswordForm onSubmit={onSubmit} />
        </div>
    );
}
