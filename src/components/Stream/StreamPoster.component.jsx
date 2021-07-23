import React from 'react'
import StreamInfo from '../StreamHero/StreamInfo.component';
const StreamPoster = (props) => {
    return (
        <>
            <div className="relative hidden lg:block w-full flex flex-row-reverse justify-end" style={{ height: "30rem" }}>
                <div className="absolute z-1 w-full h-full"
                     style={{
                         backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />

                <div className="absolute z-30 flex flex-row items-center justify-end align-end ml-80 w-1/2 h-full pl-10 left-30">
                    <StreamInfo info={props.info}
                        name={props.name}
                        lang={props.lang}
                        about={props.about}
                    />
                </div>
                
                <img src={props.src}
                    alt={props.title}
                    className="w-full h-full rounded-md"
                />
                
                <div className="absolute z-10 left-24 top-10 flex items-center">
                    <div className="w-64 h-96">
                        <img src={props.src} alt={props.name}
                            className="w-full h-full rounded-xl"
                        />
                    </div>
                </div>
                </div>
                
                
            
        </>
    )
}

export default StreamPoster;