import React, {FC} from 'react';
// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";

interface IProps{
    vote_average:number|undefined
}
const StarsRating:FC<IProps> = ({vote_average}) => {
    const max = 10;

    return (
        <div>
            <ReactStars
                count={max}
                size={24}
                value={vote_average}
                edit={false}
                emptyIcon={<FontAwesomeIcon icon={faStar}/>}
                filledIcon={<FontAwesomeIcon icon={faStar}/>}
                halfIcon={<i className="fas fa-star-half-alt"></i>}
                activeColor="#ffc107"
            />

        </div>
    );
};

export {StarsRating};