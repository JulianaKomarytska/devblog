import React, {Component} from 'react';
import Button from '../Button';
import './styles.scss';
import { Link } from 'react-router-dom';


class CardItem extends Component{

    render(){
        const {match} = this.props;
        const {title, id, date, descript, img} = this.props.article;
        return <div id={id} className={'card'}>
                <div className={'card_img_wrapp'}>
                    <img src={img} alt={title} className={'card_img'}/>
                </div>
            <div className={'card_text'}>{descript}</div>
            <div className={'card__text_wrapp'}>
                <h2 className={'card_title'}><Link to={`/blog/${id}`}>{title}</Link></h2>
                <Button url={`${match.url}/${id}`} btnText={'read more'}/>
            </div>
                <div className={'card__bottom_info'}>
                    <div className={'card_date'}>{new Date(date).toDateString()}</div>
                </div>

        </div>
    }
}
export default CardItem