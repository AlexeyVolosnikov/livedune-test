import React, {Component} from 'react';
import {BlueLinkButton} from "../BlueLinkButton/BlueLinkButton";
import {Logotype} from "../Logotype/Logotype";
import {GreyText} from "../GreyText/GreyText";
import {GreyLink} from "../GreyLink/GreyLink";
import './header.scss';


export class Header extends Component {
    render() {
        let greyLinkText, blueLinkText, link;
        if (this.props.page === "auth") {
            greyLinkText = "У вас нет аккаунта?"
            blueLinkText = "Регистрация"
            link = "/reg"
        }
        else if (this.props.page === "reg") {
            greyLinkText = "Уже есть аккаунт?"
            blueLinkText = "Войти"
            link = "/"
        }
        return (
            // space-between header
            <div className={"space-between"}>
                <Logotype to={"/"} />
                {
                    (this.props.page === "confirm" || this.props.page === "missed")
                    &&
                    <div className={"header-exit-grey"}>
                        <GreyLink text={"Выйти"} to={"/"} />
                    </div>
                }
                {
                    (this.props.page !== "confirm" && this.props.page !== "missed")
                    &&
                    this.props.page !== undefined
                    &&
                    <div className={"row"}>
                        <GreyText disableWidth={570} text={greyLinkText} />
                        <BlueLinkButton className={"header-blue-link-btn blue-link-btn"} to={link} text={blueLinkText} mobileWidth={"113px"} />
                    </div>
                }
            </div>
        );
    }
}
