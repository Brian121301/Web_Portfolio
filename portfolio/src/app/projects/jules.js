"use client"

import { useState } from "react"

const Jules = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div className="flex flex-col items-center shadow-md outline outline-1 p-8">

                <img
                    src="Jules.jpeg"
                    alt="Jules webpage"
                    className="h-76 w-72 object-contain pb-6"
                />
                <div>
                    <h1 className="text-2xl font-bold">Jules Crafting Corner</h1>
                    <div className="flex flex-row space-x-6 pt-2 pb-2">
                        <h1 className="font-bold">E-commerce Website</h1>
                        <p>
                            Feb 2024 - Apr 2024
                        </p>
                    </div>
                    <p>
                        Developed a critical safety mobile app in collaboration with A-Shield LLC
                        and a University of North Texas IT group. The app enhances law enforcement
                        response during active shooter situations using geofencing, real-time user
                        status updates, and a dynamic map. Built with React Native and AWS backend,
                        the app provides first responders with a heat map for coordinated response efforts.
                    </p>
                </div>

                <div className="flex flex-row">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                    <a
                        href={"https://github.com/Brian121301/Jules-Crafting-Corner"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >Github</a>
                </div>
            </div>
        </div>
    )
}

export default Jules