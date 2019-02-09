import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../ArticleList';
import './styles.scss';

// -- to Render one article
import ArticleFull from '../ArticleFull';
import articleText from '../FromServer/text.js';
import ErrorPage from '../ErrorPage';
import Breadcrumbs from '../Breadcrumbs';
/*import img from '../FromServer/importimg';*/
import Pagination from  '../Pagination';

class BlogPage extends Component{
    constructor(props){
        super(props);
        const articleID = this.props.match.params.articleID;
        this.state = {
            articleID: articleID
        }
    }

    getArticleItem() {
        let self = this;
        let UrlPath = this.props.match.url.split(this.props.match.params.articleID)[0];
        this.article = (articleText.filter( function(item, index) {
            if (self.state.articleID === item.id) {
                if (index < articleText.length-1){item.nextItemURL = `${UrlPath}${articleText[index+1].id}`}
                if (index > 0){item.prevItemURL = `${UrlPath}${articleText[index-1].id}`}
                return true
            }
            return false;
        }))[0];
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.articleID !== this.state.articleID)
            this.setState({articleID : nextProps.match.params.articleID});
            this.article = (articleText.filter((item) => nextProps.match.params.articleID === item.id))[0];
    }


    render() {
        console.log('blog render', this.props);
        if (this.props.match.params.articleID) this.getArticleItem();

        const {match} = this.props;
        return (
            <Fragment>
                    <Breadcrumbs history={this.props.history}/>

                            <Route path={`${match.url}`}
                               render={ (props)=>
                                   !this.state.articleID?
                                       <Pagination {...props} match={match} article={articleText} url={'/blog'} render={(article) => <ArticleList url={'/blog'} articles={article}/>} />
                                      :
                                       this.article?
                                           <ArticleFull {...props} article={this.article}/> :
                                           <ErrorPage/>
                               }
                            />


            </Fragment>
    )}
}

export default BlogPage