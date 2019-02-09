import React, {Component, Fragment} from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import ContactsModal from "../ContactsModal";

export default class Navigation extends Component{
    constructor(props) {
        super(props);
        this.navList = [
            {url: '/',
            title: "Main"},
            {url: '/about',
            title: "About"},
            {url: '/blog',
            title: "Blog"},
            {url: '#contacts',
            title:"Contact"}
            ];

        this.state = {
            selected: this.navList[0],
            mobileNav: false,
            isClosedNav: true,
            isOpenContact: false,
        }
    }

    componentWillMount(){
        this.setActiveMenu();
        this.setState({
            mobileNav: !(document.documentElement.clientWidth > 767)});
    }

    //  ---------- отслеживание изменения размена браузера
    changeScreenWidth = () => {
        this.isClosedNav = document.documentElement.clientWidth > 767 ? true : this.state.isClosedNav;
        this.setState({
            mobileNav: !(document.documentElement.clientWidth > 767),
            isClosedNav:  this.isClosedNav
        })
    };


    componentDidMount() {
        window.addEventListener('resize', this.changeScreenWidth)
    }

// ---- ручная проверка необходимости перерендеринга
    shouldComponentUpdate(nextProps, nextState) {
        let screenWidthChange = this.state.mobileNav !== !(document.documentElement.clientWidth > 767);
        let toggleMobileMenu = this.state.isClosedNav !== nextState.isClosedNav;
        let selectedChange = nextState.selected !== this.state.selected;
        let isOpenContact = nextState.isOpenContact !== this.state.isOpenContact;
        let nextPropsChange = nextProps.history.location.pathname.slice(1).split('/')[0] !== this.state.selected.slice(1);
        if (nextPropsChange) this.setActiveMenu(nextProps.history.location.pathname);
        return (
            selectedChange ||
            nextPropsChange ||
            screenWidthChange ||
            toggleMobileMenu ||
            isOpenContact
        )
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.changeScreenWidth)
    }



    //-- Выбор активного меню по клику на ссылку
    handleSelect = event => {
        if (event) {
            this.setState({
                selected: event.target.id
            });
            this.handleToggleClose();
        }
    };


    // -- Установка активного меню перед рендерингом навигации для корректного отображения активной вкладки
    setActiveMenu = (path) => {
        let pathname = path || this.props.history.location.pathname;
        let urlAttrArray = pathname.slice(1).split('/');
        this.setState({selected: `/${urlAttrArray[0]}`});
    };

    // ----- Закритые меню по нажатию на пункт
    handleToggleClose = () => {
        this.setState({isClosedNav: !this.state.isClosedNav });
        this.state.mobileNav && this.state.isClosedNav === true ?
            document.querySelector("body").style.overflow = 'hidden' :
            document.querySelector("body").style.overflow = 'auto'
    };

    // -------------
    contactToggle = () => {
        this.setState({isOpenContact: !this.state.isOpenContact});
        if (this.state.mobileNav && !this.state.isClosedNav) this.handleToggleClose();
    };

    render(){

        const navLi = this.navList.map((item) =>
            <Link to={item.url} key={item.title}>
                <li id={item.url}
                    onClick= {item.url ==='#contacts'? (e)=>{e.preventDefault();
                                                            this.contactToggle()
                                                            } :
                                                            this.handleSelect.bind(this)}
                    className = {this.state.selected === item.url ? 'navigation__li__active' : null}>
                    {item.title}
                </li>
            </Link>
        );

        const mobileNavWrapp = (
            <div className={`mobileWrapper ${this.state.isClosedNav? 'closed' : 'opened'}`}>
                <div className={'closeButton'}  onClick={this.handleToggleClose}>
                    <span/>
                </div>
                <ul className={'navbar_mobile'}>
                    {navLi}
                </ul>
            </div>
        );

        const desctopNav = <ul className={'navbar'}>
            {navLi}
            </ul>;

        return <Fragment>
            {this.state.mobileNav? mobileNavWrapp : desctopNav}
            {this.state.isOpenContact && <ContactsModal closeModal={this.contactToggle}/>}
            </Fragment>
    }
}