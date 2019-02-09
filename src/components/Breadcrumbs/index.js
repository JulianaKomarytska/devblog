import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

class Breadcrumbs extends Component{

    render() {
        const arr = this.props.history.location.pathname.split('/');
        const arrURL =[];
        let preURL='';
        for ( let i = 0; i < arr.length-1; i++){

            //Check for illegal words like: "page"
            if (arr[i] === 'page') continue;

            let url = `${preURL}${arr[i]}/`;
            arrURL.push({
                url: url,
                title: preURL.length? arr[i] : ' Go Home',
            });
            preURL = url;
        }

        const breadcrumbs = arrURL.map( (item, index) => {
            return <Fragment key={`breadcrumbs${index}`}>
                <Link to={item.url}><div className={'breadcrumbs_link'}>{item.title} </div></Link>
                {arrURL.length-1 !== index? <div className={'breadcrumbs_arrow'}>{String.fromCharCode(8621)}</div> : false}
            </Fragment>}
            );



        return <div className={'breadcrumbs'}>
                    {breadcrumbs}
                </div>

}}
export default Breadcrumbs