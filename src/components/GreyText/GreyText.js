import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import './greyText.scss';

export class GreyText extends Component {
    constructor() {
        super();
        this.wrapperRef = React.createRef(uuid())
    }
    componentDidMount() {
        const toggle = () => {
            this.wrapperRef.current.style.display = (window.innerWidth <= this.props.disableWidth) ? "none" : "flex"
        }
        window.addEventListener("resize", e=>{
            toggle()
        })
        toggle()
    }
    render() {
        return (
            <div ref={this.wrapperRef} className={"no-account-wrapper center-column text-center"}>
                <label className={"no-account"}>{this.props.text}</label>
            </div>
        )
    }
}
