import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../components/config/tempPOsters.config";
import axios from "axios";


const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    })

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    })

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    })

    return (
    <>
    <div className="flex flex-col gap-6">
        <div className="container mx-auto px-8 lg:px-28 my-7">
            <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-800">
                The Best of Entertainment</h1>
            <EntertainmentCardSlider/>
        </div>
        <div className="bg-mr-800 py-12">
        
        <div className="container mx-auto px-12 flex flex-col gap-3">
            <div className="hidden md:flex">
            <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
            />
        </div>                
            <PosterSlider images={popularMovies} title="Premiers"
                subtitle="Brand new releases every friday" isDark/>
        </div>
        </div>            
        </div>
            
        <div className="container mx-auto px-16 my-8">
            <PosterSlider images={topRatedMovies}
            title="Online Streaming Events" isDark={false} />
        </div>
        <div className="container mx-auto px-16 my-8">
                <PosterSlider images={upcomingMovies}
                title="Outdoor Events" isDark={false} />
        </div>
    </>);
};

export default HomePage;