import React, {Component, Fragment} from "react";
import Header from "./Header";
import './main.scss'

import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// --------- Pages for Router
import MainPage from "./MainPage";
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ContactsPage from './ContactsPage';


const history = createBrowserHistory();


class App extends Component{
    render(){
        return <Router history={history}>
            <Fragment>
                <Header history={history}/>
                <Route exact path={'/'} component={MainPage}/>
                <Route path={'/about'} render={ (props) => <AboutPage date={'lajdl'} {...props}/>}/>
                <Route path={'/blog/:articleID?'} component={BlogPage}/>
                <Route path={'/contacts'} component={ContactsPage}/>
            </Fragment>
        </Router>
    }
}
export default App