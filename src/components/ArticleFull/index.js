import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import ButtonScrollUp from '../ButtonScrollUp';
import './styles.scss';


class ArticleFull extends Component{
    render(){
        const {title, text, id, date, prevItemURL, nextItemURL} = this.props.article;
        return (
            <Fragment>
                <div id={id} className={'article'}>
                    <h1 className={'article_title'}>{title}</h1>
                    <div className={'article_text'} dangerouslySetInnerHTML={{__html: text}}/>
                    <div className={'article_date'}>{new Date(date).toDateString()}</div>

                </div>
                {(prevItemURL || nextItemURL)?
                    <div className={'article_slider'}>
                        {prevItemURL? <Link to={prevItemURL}><div className={'article__prev_btn'}>Previous article</div></Link> : false}
                        <div className={'article__btn_grow'}></div>
                        {nextItemURL? <Link to={nextItemURL}><div className={'article__next_btn'}>Next article</div></Link> : false}
                    </div> :
                    false
                }
                <ButtonScrollUp/>
            </Fragment>
        )
    }
}
export default ArticleFull

//TODO