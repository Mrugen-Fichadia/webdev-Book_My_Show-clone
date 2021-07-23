import React from 'react'
import StreamInfo from './StreamInfo.component'

const StreamHero = () => {
    return (
        <>
            <div>

                {/* Small */}
                <div className="relative md:hidden w-full" style={{ height: "calc(180vw)" }}>

                </div>

                {/* Medium */}
                <div className="relative hidden md:block lg:hidden w-full" style={{ height: "calc(100vw)" }}>

                </div>

                {/* Large */}
                <div className="relative hidden lg:block w-full" style={{ height: "30rem" }}>
                    <div className="absolute z-10 w-full h-full"
                    style={{
                        backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />

                    <div className="absolute z-10 left-24 top-10 flex items-center">
                        <div className="w-64 h-96">
                            <img
                            src="https://in.bmscdn.com/discovery-catalog/events/et00312755-henkzwkydx-portrait.jpg"
                            alt="poster"
                            className="w-full h-full rounded-lg" />
                        </div>

                        <div className="mx-">
                            <StreamInfo/>
                        </div>
                    </div>
                    <img src="https://in.bmscdn.com/discovery-catalog/events/et00312755-henkzwkydx-portrait.jpg"
                        alt="stream bg"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    )
}

export default StreamHero;
