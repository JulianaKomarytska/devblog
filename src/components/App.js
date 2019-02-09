import React, {Component, Fragment} from "react";
import Header from "./Header";
import './main.scss'

import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// --------- Pages for Router
import MainPage from "./MainPage";
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ContactsModal from './ContactsModal';
import ErrorPage from './ErrorPage'

const history = createBrowserHistory();


class App extends Component{
    render(){
        return <Router history={history}>
            <Fragment>
                <Header history={history}/>
                <Switch>
                    <Route exact path={'/'} component={MainPage}/>
                    <Route path={'/about'} component={AboutPage}/>
                    <Route path={'/contacts'} render={()=><Fragment>
                                                                <ContactsModal/>
                                                                <MainPage/>
                                                          </Fragment>}/>

                    <Route exect path={'/blog/article=:articleID'} component={BlogPage}/>
                    <Route path={'/blog/(page)?/:pageindex?'} component={BlogPage}/>
                    <Route component={ErrorPage}/>
                </Switch>

            </Fragment>
        </Router>
    }
}
export default App