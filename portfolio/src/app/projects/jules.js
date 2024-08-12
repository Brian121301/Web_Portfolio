"use client"

import { useState } from "react"

const Jules = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const info = {
        summary:
            <p className="pb-4">
                Led a team of 3 in developing a dynamic e-commerce platform specializing in unique, hand-crafted goods,
                focusing on customer experience and security. Utilized HTML, CSS, PHP, and JavaScript to create seamless
                navigation and customization. Implemented robust security measures, including multifactor authentication,
                a secure PayPal payment gateway, and HTTPS encryption. Conducted vulnerability assessments using Nessus and
                simulated DDoS attacks to ensure system resilience.
            </p>
    }

    return (
        <div>
            <div className="flex flex-col items-center shadow-md outline outline-1 rounded-lg p-8">

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
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-40'}`}>
                        {isExpanded ? info.moreInfo : info.summary}
                    </div>
                </div>

                <div className="flex flex-row">
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