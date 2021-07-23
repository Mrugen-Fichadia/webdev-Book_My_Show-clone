import React from 'react'
import Poster from '../components/Poster/poster.component'
import PlaysFilters from '../components/Filters/PlaysFilters.component'

const Sports = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-row-reverse items-start w-full">
                    <div className="flex-flex-col w-8/12 my-3 mt-12">
                        <h1 className="text-2xl font-bold">Sports In Ahmedabad</h1>
                        <div className="flex flex-wrap my-7">
                            <div className="w-3/12 h-32">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-pjdvkdvzkn-portrait.jpg"
                                    title="Call Of Duty Mobile Tournament"
                                    subtitle="₹100 Onwards"
                                />
                            </div>
                            <div className="w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-pjdvkdvzkn-portrait.jpg"
                                    title="Call Of Duty Mobile Tournament"
                                    subtitle="₹100 Onwards"
                                />
                            </div>
                            <div className="w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-pjdvkdvzkn-portrait.jpg"
                                    title="Call Of Duty Mobile Tournament"
                                    subtitle="₹100 Onwards"
                                />
                            </div>
                            <div className="w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-pjdvkdvzkn-portrait.jpg"
                                    title="Call Of Duty Mobile Tournament"
                                    subtitle="₹100 Onwards"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12 my-3 mt-12">
                        <h1 className="text-2xl font-bold">Filters</h1>
                        <div className="my-4">
                            <PlaysFilters
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                            <PlaysFilters
                                title="Categories"
                                tags={["E Sports"]}
                            />
                            <PlaysFilters
                                title="Price"
                                tags={["Free", "1-500", "501-1000", "1001-2000", "2001-3000"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sports;
