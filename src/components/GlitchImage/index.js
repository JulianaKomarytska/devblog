import React, {Component, Fragment} from 'react';
import './styles.scss';


class GlitchImage extends Component{
    render(){
        let glitch = (
            <Fragment>
                <img className={'main_img main_img__1'} src={this.props.image} alt='main'/>
                <img className={'main_img main_img__2'} src={this.props.image} alt='main'/>
                <img className={'main_img main_img__3'} src={this.props.image} alt='main'/>
                <img className={'main_img main_img__4'} src={this.props.image} alt='main'/>
            </Fragment>
        );
        return glitch
    }
}

export default GlitchImage