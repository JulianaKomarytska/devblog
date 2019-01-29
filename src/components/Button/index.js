import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

class Button extends Component {
    constructor(props){
        super(props);
        this.text = this.props.btnText || 'More';
    }
    render(){
        const {url} = this.props;
        return(
            <Link className={'button'} to={url}>
                <span className={'button_text'}>{this.text}</span>
            </Link>
        )
    }
}

export default Button