import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './blueLinkButton.scss';

// button потому, что выглядит как кнопка, а BlueLink - это синяя ссылка
export class BlueLinkButton extends Component {
    render() {
        return (
            <div>
                <Link
                    style={this.props.style}
                    className={this.props.className}
                    to={this.props.to}
                >{this.props.text}</Link>
            </div>
        );
    }
}
