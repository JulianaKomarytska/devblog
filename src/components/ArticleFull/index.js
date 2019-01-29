import React, {Component} from 'react';
import './styles.scss';


class ArticleFull extends Component{

    render(){
        const {title, text, id, date} = this.props.article;
        return <div id={id} className={'article'}>
                <h2 className={'article_title'}>{title}</h2>
                <div className={'article_text'}>{text}</div>
                <div className={'article_date'}>{new Date(date).toDateString()}</div>

        </div>
    }
}
export default ArticleFull

//TODO