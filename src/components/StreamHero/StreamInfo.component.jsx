import React from 'react'


const StreamInfo = (props) => {
    return (
        <>
            <div className="w-full flex-col justify-end pl-10">
                <div className="w-36 h-6 md:px-4">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="Premier"
                        className="w-full h-full"/>
                </div>
                <h1 className="hidden lg:block text-white font-bold lg:text-4xl md:px-4 mt-5">{props.name}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5 ">
                    <div className="text-white flex flex-col text-left gap-5 mt-5 md:px-4 w-full">
                        <h4>{props.info}</h4>
                        <h4>{props.lang}</h4>
                        <p>
                            {props.about}
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default StreamInfo;
