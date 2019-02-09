import React, {Component, Fragment} from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ContactsModal from '../ContactsModal';
import './styles.scss';


class ContactsPage extends Component{
    constructor(props) {
        super(props);
    this.state = {
        isOpenContact: false,
    }
    }

    // -------------
    contactToggle = () => {
        console.log('456');
        this.setState({isOpenContact: !this.state.isOpenContact});
    };

    render(){
        return <Fragment>
        <Breadcrumbs history={this.props.history}/>
            Contacts
            <div onClick={this.contactToggle}>Write us
                {this.state.isOpenContact && <ContactsModal closeModal={this.contactToggle}/>}
            </div>

        </Fragment>
    }
}
export default ContactsPage;