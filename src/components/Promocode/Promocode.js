import React, {Component} from "react";
import {CustomField} from "../CustomField/CustomField";
import {Field} from "redux-form";
import "./promocode.scss";

export class Promocode extends Component {
    constructor() {
        super();
        this.state = {
            hidden : true
        }
        this.show = this.show.bind(this);
    }
    show() {
        this.setState({
            hidden : false
        })
    }
    render() {
        return (
            <div onClick={this.show} className={"blue-link"} style={this.props.style}>
                {
                    this.state.hidden
                    &&
                    <label>У меня есть промокод</label>
                }
                {
                    !this.state.hidden
                    &&
                    <Field
                        component={CustomField}
                        name={'promo'}
                        type={'text'}
                        label={"Промокод"}
                    />
                }
            </div>
        );
    }
}
