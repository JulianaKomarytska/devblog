import React, {Component} from 'react';
import './styles.scss';
import imgError from '../../img/404.png';
import Button from '../Button';


class ErrorPage extends Component{
    render(){
        return  <div className={'Error'}>
                   <div className={'Error_img_wrapp'}><img src={imgError} className='Error_img' alt={'Error'}/></div>
                    <Button url={'/'}>Home</Button>
                </div>

    }
}

export default ErrorPage