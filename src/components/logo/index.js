import React, {Component} from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import './styles.scss';

class Logo extends Component{

    render(){
        return(
            <div className='logo'>
                <Link to={'/'}>
                    <img src={logo} alt={'logo'}/>
                </Link>
            </div>
        )
    }
}

export default Logo
