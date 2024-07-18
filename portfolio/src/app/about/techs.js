"use client";
import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import {
    FaDatabase,
    FaCode,
} from 'react-icons/fa';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiVisualstudiocode,
    SiIntellijidea,
    SiMacos,
    SiPycharm,
} from "react-icons/si";

const skills = [
    { name: 'C++', icon: CgCPlusPlus },
    { name: 'JavaScript', icon: DiJavascript1 },
    { name: 'React.js & React Native', icon: DiReact },
    { name: 'Node.js', icon: DiNodejs },
    { name: 'Python', icon: DiPython },
    { name: 'SQL', icon: FaDatabase },
    { name: 'HTML & CSS', icon: FaCode },
    { name: 'Git', icon: DiGit },
    { name: 'Java', icon: DiJava },
];

const tools = [
    { name: 'Visual Studio Code', icon: SiVisualstudiocode },
    { name: 'MacOS', icon: SiMacos },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea },
    { name: 'PyCharm', icon: SiPycharm },
];

const Skills = () => {
    const [activeSkill, setActiveSkill] = React.useState(null);

    const handleMouseEnter = (index) => {
        setActiveSkill(index);
    };

    const handleMouseLeave = () => {
        setActiveSkill(null);
    };

    return (
        <div className="text-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 p-4">Skills</h2>
                <div className="grid grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center justify-center shadow-lg outline outline-4 outline-blue-500 pt-4 hover:bg-white hover:outline-white hover:shadow-xl transition duration-500 ease-in-out"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                            {React.createElement(skill.icon, { className: 'w-20 h-24 text-blue-500' })}
                            <span className={`text-lg md:text-xl text-gray-700 mt-2 ${activeSkill === index ? 'opacity-100' : 'opacity-0'}`}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 pt-20">Tools</h2>
                <div className="grid grid-cols-3 gap-4">
                    {tools.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            {React.createElement(skill.icon, { className: 'w-12 h-12 md:w-16 md:h-16 text-blue-500' })}
                            <span className="text-lg md:text-xl text-gray-700 mt-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
