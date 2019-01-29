import React, {Component} from 'react';
import './styles.scss';

const content = {
    title: "The demo blog of little developer",
    subtitle: "from service staff to web developer"
};

class ContentContainer extends Component {
    render() {
        return(
            <div className={'content_wrapp'}>
                <h1 className={'title_h1'}>{content.title}</h1>
                <h2 className={'sub_title'}>{content.subtitle}</h2>
            </div>
        )
    }
}

export default ContentContainer