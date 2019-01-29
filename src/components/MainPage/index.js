import React, {Component, Fragment} from 'react';
import GlitchImage from '../GlitchImage';
import ContentContainer from '../ContentContainer';
import mainimage from '../../img/hacker.png';

class MainPage extends Component{
    render(){
        return(
            <Fragment>
                <ContentContainer/>
                <GlitchImage image={mainimage}/>
            </Fragment>
        )
    }
}

export default MainPage