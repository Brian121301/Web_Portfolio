import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaDatabase } from 'react-icons/fa';
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
    { name: 'Git', icon: DiGit },
    { name: 'Java', icon: DiJava },
];

const tools = [
    { name: 'Visual Studio Code', icon: SiVisualstudiocode },
    { name: 'MacOS', icon: SiMacos },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea },
    { name: 'PyCharm', icon: SiPycharm },
]

const Skills = () => {
    return (
        <div className="text-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {React.createElement(skill.icon, { className: 'w-12 h-12 md:w-16 md:h-16 text-blue-500' })}
                            <span className="text-lg md:text-xl text-gray-700 mt-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Tools</h2>
            <div className="grid grid-cols-3 gap-4">
                {tools.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
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
