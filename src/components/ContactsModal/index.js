import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles.scss';

class ContactsModal extends Component{

    componentWillMount(){
       this.modal = document.createElement('div');
       document.body.appendChild(this.modal);
       document.body.style.overflow ='hidden';
       document.getElementById('root').style.cssText = 'filter: blur(5px);' +
           'pointer-events: none';
    }

    componentWillUnmount(){
        document.body.removeChild(this.modal);
        document.getElementById('root').style.cssText = '';

    };

    closeByBodyClick(e){
        let body = document.body;
        if (e.target === body) {
            return this.props.closeModal? this.props.closeModal() : window.location='/'
        }
    }

    changeTextareaHeight = () => {
        let textareaPlace = document.getElementsByTagName('textarea')[0];
        const lineHeight = getComputedStyle(textareaPlace).lineHeight;
        let currentHeight = textareaPlace.clientHeight;
        let scrollHeight = textareaPlace.scrollHeight;
        if (currentHeight < 100 && scrollHeight/parseInt(lineHeight) > currentHeight/parseInt(lineHeight) ) {
            textareaPlace.style.resize = 'auto';
            textareaPlace.style.height = scrollHeight + 'px';
            textareaPlace.style.resize = 'none'
        }
    };


    render() {
        document.body.onclick=this.closeByBodyClick.bind(this);
        return ReactDOM.createPortal(
            <Fragment>
                <div className={'contact'}>
                    <div className={'contact_wrapper'}>
                        {this.props.closeModal?
                            <div className={'contact_close'} onClick={this.props.closeModal}/> :
                            <Link to={'/'}><div className={'contact_close'}/></Link>
                        }
                        <div className={'contact_header_block'}>
                            <h2 className={'contact_title'}>Contact us</h2>
                            <div className={'contact_massage'}>If you have any questions or proposals, fill free to contact us</div>
                        </div>
                        <div className={'contact_form__wrapper'}>
                            <form>
                                <input type='text' placeholder='Name' size='20' required/>
                                <div className={'contact_inline'}>
                                    <input type='tel' placeholder='phone' pattern={'[0-9]{10,13}'} size={'15'} required/>
                                    {String.fromCharCode(160)}{String.fromCharCode(160)}
                                    <input type='email' placeholder='Email' required/>
                                </div>
                                <textarea placeholder={'Enter your massage'} onChange={this.changeTextareaHeight.bind(this)} cols={10} rows={1}/>
                                <button type='submit' className={'contact_send'}>Send</button>
                            </form>
                        </div>

                        <div className={'contact_my'}>
                            <div className={'contact_my_tel'}>TEL | <a href={'tel:+380933170932'} type='tel'>{`+38(093)317-09-32`}</a></div>
                            <div className={'contact_my_email'}>E-mail | <a href={'mailto:juliana.komarytska@gmail.com'}>juliana.komarytska@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </Fragment>,
            this.modal
        )
    }
}

export default ContactsModal