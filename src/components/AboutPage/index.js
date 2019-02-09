import React, {Component} from 'react';
import Breadcrumbs from '../Breadcrumbs'
import './styles.scss';

class AboutPage extends Component{
    render() {
        return[
            <Breadcrumbs history={this.props.history}/>,
            <div>This is About page </div>
        ]
    }
}

export default AboutPage
