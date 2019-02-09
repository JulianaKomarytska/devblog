import React, {Component} from 'react';
import './styles.scss';
import CardItem from '../CardItem';
import ButtonScrollUp from '../ButtonScrollUp';

class ArticleList extends Component {
    render(){

        const articleElements = this.props.articles.map( (article) =>
            <CardItem url={this.props.url} description={true} article={article} key={article.id} id={article.id}/>
        );
        return(
            <div className={'article_list'}>
                {articleElements}
                <ButtonScrollUp/>
            </div>
        )
    }
}
export default ArticleList
