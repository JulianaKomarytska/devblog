import React, {Component} from 'react';
import Button from '../Button';
import './styles.scss';
import { Link } from 'react-router-dom';

class CardItem extends Component{

    render(){
        const {url} = this.props;
        const {title, id, date, descript, img, likes, comments} = this.props.article;
        return <div id={id} className={'card'}>
                <div className={'card_img_wrapp'}>
                    <img src={img} alt={title} className={'card_img'}/>
                </div>
            <div className={'card_text'}>{descript}</div>
            <div className={'card__text_wrapp'}>
                <h2 className={'card_title'}><Link to={`/blog/${id}`}>{title}</Link></h2>
                <Button url={`${url}/article=${id}`} btnText={'read more'}/>
            </div>
                <div className={'card__bottom_info'}>
                    <div className={'card_date'}>{new Date(date).toDateString()}</div>
                    <div className={'card_social'}>
                        <div className={'cart_likes'}>{likes? likes : '0'}</div>
                        <div className={'cart_comments'}>{comments? comments.length : '0'}</div>
                    </div>
                </div>

        </div>
    }
}
export default CardItem