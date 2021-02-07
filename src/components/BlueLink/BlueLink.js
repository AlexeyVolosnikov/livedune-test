import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './blueLink.scss';

export class BlueLink extends Component {
    render() {
        return (
            <div>
                <Link
                    style={this.props.style}
                    className={"blue-link"}
                    to={this.props.to}
                >{this.props.text}</Link>
            </div>
        );
    }
}
