import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './blueLink.scss';

export class BlueLink extends Component {
    render() {
        let _class = (this.props.className === undefined) ? "" : this.props.className;
        return (
            <div className={"center"}>
                <Link
                    style={this.props.style}
                    className={"blue-link " + _class}
                    to={this.props.to}
                >{this.props.text}</Link>
            </div>
        );
    }
}
