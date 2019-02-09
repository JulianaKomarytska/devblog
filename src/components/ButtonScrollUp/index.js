import React, {Component} from 'react';
import './styles.scss';

class ButtonScrollUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrollUp: false,
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.showUpp.bind(this));
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.scrollUp !== this.state.scrollUp

    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.showUpp.bind(this));
    }

    showUpp = () => this.setState({ scrollUp: (document.documentElement.scrollTop >= document.documentElement.clientHeight/3)});

    render(){
        return <div
                    className={`${this.state.scrollUp? 'ButtonScrollUp_display' : 'ButtonScrollUp_hide' } ButtonScrollUp`}
                    onClick={()=>window.scrollTo(0,0)}
                >
            {String.fromCharCode(10239)}
               </div>

    }
}

export default ButtonScrollUp