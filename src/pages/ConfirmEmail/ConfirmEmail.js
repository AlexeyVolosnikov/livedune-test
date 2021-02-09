import React, {Component} from "react";
import {Header} from "../../components/Header/Header";
import {BlueLinkButton} from "../../components/BlueLinkButton/BlueLinkButton";
import {BlueLink} from "../../components/BlueLink/BlueLink";
import "./confirmEmail.scss";

export class ConfirmEmail extends Component {

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        return (
            <div>
                <Header page={'confirm'} />
                <div className="padding-wrapper">
                    <div className="center big-title">
                        <label className={"text-center confirm-title"}>Подтвердите <div>ваш e-mail</div></label>
                    </div>
                    <div className={"centergrey center"}>
                        <label className={"center-grey-text text-center"}>{name}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.</label>
                    </div>
                    <div className="center ">
                        <BlueLinkButton className={"go-to-email-btn"} to={"/"} text={"Перейти к почте"} />
                    </div>
                    <div className="center did-not-get">
                        <BlueLink to={"/missed"} text={'Мне не пришло письмо'} />
                    </div>
                </div>
            </div>
        );
    }
}
