import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./greyLink.scss";

export class GreyLink extends Component {
    render() {
        return (
            <div className={"center-column"}>
                <Link className={"grey"} to={this.props.to}>{this.props.text}</Link>
            </div>
        );
    }
}
