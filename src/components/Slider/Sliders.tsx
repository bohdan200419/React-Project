import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'
import {Slidering} from "./Slidering";
import {useAppSelector} from "../../hooks";




interface IProps {
    results: IMovie[]
}

const Sliders: FC<IProps> = ({results}) => {

    const {mode} = useAppSelector(state => state.mode)
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings} className={` slider ${mode?'dark':'light'} `}>
            {
                results.map(value => <Slidering results={value} key={value.id}/>)
            }

        </Slider>
    );
};

export {Sliders};