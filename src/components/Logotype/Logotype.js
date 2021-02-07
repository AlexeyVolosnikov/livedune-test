import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './logotype.scss';

export class Logotype extends Component {
    render() {
        return <Link className={"logo "} to={this.props.to}>LIVEDUNE</Link>;
    }
}
