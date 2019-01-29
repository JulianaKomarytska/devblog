import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../ArticleList';
import './styles.scss';

// -- to Render one article
import ArticleFull from '../ArticleFull';
import articleText from '../FromServer/text.js';

class BlogPage extends Component{
    constructor(props){
        super(props);
        const articleID = this.props.match.params.articleID;
        this.state = {
            articleID: articleID
        }
    }
    componentWillMount(){
        this.article = (articleText.filter((item) => this.state.articleID === item.id))[0];
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.articleID !== this.state.articleID)
            this.setState({articleID : nextProps.match.params.articleID});
            this.article = (articleText.filter((item) => nextProps.match.params.articleID === item.id))[0];
    }

    render() {
        const {match} = this.props;
        return <Route path={`${match.url}`}
                   render={ (props)=>
                       this.state.articleID?
                           <ArticleFull {...props} article={this.article}/> :
                           <ArticleList {...props}/>}/>

    }
}

export default BlogPage