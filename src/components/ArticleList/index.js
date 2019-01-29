import React, {Component} from 'react';
import './styles.scss';
import CardItem from '../CardItem';
import articleText from '../FromServer/text.js';

class ArticleList extends Component {

    render(){

        const articleElements = articleText.map( (article) =>
            <CardItem match={this.props.match} description={true} article={article} key={article.id} id={article.id}/>
        );

        return(
            <div className={'article_list'}>
                {articleElements}
            </div>
        )
    }
}
export default ArticleList
