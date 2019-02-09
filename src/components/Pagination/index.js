import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageIndex: (this.props.match.params.pageindex)? +this.props.match.params.pageindex : 1,
            itemPerPage: this.props.itemPerPage || 4,

        };

    }

    componentWillReceiveProps(next) {

        if (next.match.params.pageindex && this.state.pageIndex !== +next.match.params.pageindex) {
            this.setState({
                pageIndex: +next.match.params.pageindex
            })
        };
        if (typeof(next.match.params.pageindex) === 'undefined'){
            this.setState({
                pageIndex: 1,
            })
        };

    }

    render(){
        let {article: itemList} = this.props;
        let {pageIndex, itemPerPage} = this.state;
        // How many pages need ?
        const paginationLength = Math.ceil(this.props.article.length/itemPerPage);

        // Append pagination button
        const pages = [];
        for (let i=0; i < paginationLength; i++){
            pages.push(<Link to={`${this.props.url}/page/${i+1}`}
                             className={`pagination__page ${(i === this.state.pageIndex-1)?  'pagination_selected_page' : ''}`} // add style for selected page
                             key={i}>{i+1}</Link>);
        }

        // Get correct page item list
        const renderList =  [];
        let index = pageIndex*itemPerPage-itemPerPage;
        let lastIndex = (itemPerPage*pageIndex <= itemList.length)? itemPerPage*pageIndex : itemList.length;

        for ( let i = index; i < lastIndex; i++) {
            renderList.push(itemList[i])
        }


        return <Fragment>
                    {this.props.render(renderList)}
                    <div className={'pagination'}>
                        {(this.state.pageIndex > 1)? <Link to={`${this.props.url}/page/${this.state.pageIndex - 1}`}
                                                           className={'pagination__page pagination__nav'}>
                                                                    {String.fromCharCode(10641)}
                                                     </Link> : false}
                        {pages}
                        {(this.state.pageIndex < paginationLength)? <Link to={`${this.props.url}/page/${this.state.pageIndex + 1}`}
                                                                          className={'pagination__page pagination__nav'}>
                                                                                    {String.fromCharCode(10642)}
                                                                    </Link>: false}
                    </div>
               </Fragment>
    }
}
export default Pagination