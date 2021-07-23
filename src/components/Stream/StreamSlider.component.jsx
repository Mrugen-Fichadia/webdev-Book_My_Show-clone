import React from 'react'
import PosterCarouselSettings from '../config/PosterCarousel.config';
import Slider from 'react-slick';
import StreamPoster from './StreamPoster.component';

const StreamSlider = (props) => {

    const SliderConfig = props.config ? props.config : PosterCarouselSettings;
    
    return (
        <>
            <Slider {...SliderConfig}>
                {props.images.map((image) => (
                <StreamPoster {...image} />
                ))}
            </Slider>
        </>
    )
}

export default StreamSlider;
