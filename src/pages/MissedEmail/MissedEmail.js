import React, {Component} from "react";
import {Header} from "../../components/Header/Header";
import MissedEmailForm from "./../../forms/MissedEmailForm/MissedEmailForm";
import {account} from "../../validators/validators";
import "./missedEmail.scss";

export class MissedEmail extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        const values = this.props.store.getState().form.missed.values
        if (account.login === values.login) {
            alert("Письмо было отправлено на почту", values.login)
        }
        else {
            alert("Письмо может быть отправлено только на example@example.com")
        }
    }
    render() {
        return (
            <div>
                <Header page={"missed"} />
                <div className="center big-padding-top">
                    <label className={"missed-big-title text-center"}>
                        Мне не пришло письмо
                    </label>
                </div>
                <div className="center missed-medium-grey-text">
                    <label className={"text-center missed-grey-text"}>
                        <div>Письмо может прийти с задержкой в 5-10 минут.</div> Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку <label className={"blue"}><b>support@livedune.ru</b></label> и мы активируем ваш аккаунт.
                    </label>
                </div>
                <div className="center">
                    <MissedEmailForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}
