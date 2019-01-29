import React, {Component} from "react";
import "./styles.scss"
import Logo from "../logo"
import Navigation from "../navigation";

class Header extends Component {
    render(){
        return(
            <div className={'headers'}>
                <Logo/>
                <Navigation history={this.props.history}/>
            </div>
    )
    }
}

export default Header