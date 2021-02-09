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
        let _class = (this.props.className === undefined) ? "" : this.props.className;
        return (
            <div ref={this.wrapperRef} className={"center-column text-center " + _class}>
                <label className={"no-account"}>{this.props.text}</label>
            </div>
        )
    }
}
