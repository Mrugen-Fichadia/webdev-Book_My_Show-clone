import React from 'react'
import Poster from '../components/Poster/poster.component';
import StreamHero from '../components/StreamHero/StreamHero.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import TempPosters from "../components/config/tempPOsters.config"
import StreamSlider from '../components/Stream/StreamSlider.component';
import StreamInfo from '../components/StreamHero/StreamInfo.component';
import TempStreamPosters from '../components/config/TempStreamPosters.config';



const Stream = () => {

    const settings = {
        Infinity: false,
        autoplay: true,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        InitialSlide: 0,
    responsive: [
        {
            breakpoints: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll: 2,
                Infinity: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2,
                InitialSlide: 2
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                // InitialSlide: 1,
            },
        },
    ],
    };
    
    return (
        <>
            <div>
                <div>
                    <StreamSlider images={TempStreamPosters}
                    config = {settings}
                    />
                </div>
                
                <div className="mx-auto px-12">
                
                <div className="w-full my-10">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/available-buy-rent-strip-web-collection-202103160404.png"
                        alt="Add"
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="w-full">
                        <PosterSlider images={TempPosters}
                        title="Premiere Of The Week" isDark={false} />
                        </div>
                    <div className="w-full">
                        <PosterSlider images={TempPosters}
                        title="Coming Soon" isDark={false} />
                    </div>
                    <div className="w-full">
                        <PosterSlider images={TempPosters}
                        title="Bundles" isDark={false} />
                    </div>    
                </div>
                </div>
            </div>
        </>
    )
}

export default Stream;
