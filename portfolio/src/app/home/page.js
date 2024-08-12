import React from 'react';
import Link from 'next/link';

const Homepage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center text-center mr-20 p-20">
                    <h1 className="text-9xl font-bold p-4">Brian Najera</h1>
                    <h2 className="text-2xl">Full Stack Developer</h2>
                </div>
                <div className="flex justify-center ml-20 p-20">
                    <img
                        src="brian2 copy.png"
                        alt="Brian Najera"
                        className="h-99 w-96 object-contain"
                    />
                </div>
                <div className="absolute bottom-0 w-full text-center pb-20">
                    <p className="text-2xl md:text-3xl text-gray-700">Scroll down to learn more</p>
                    <svg className="w-6 h-6 mx-auto mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center -mt-24 md:-mt-36">
                <div className="flex justify-center md:mr-20 p-4">
                    <img
                        src="programmer.png"
                        alt="Programming"
                        className="h-99 w-99 object-contain"
                    />
                </div>
                <div className="max-w-4xl text-center pr-20 pt-10">
                    <h1 className="text-6xl font-bold mb-8">About me</h1>
                    <p className="text-xl font-bold p-2">
                        Hi, I'm Brian Najera, a recent Computer Science graduate from the University of North Texas.
                    </p>
                    <p className="text-xl font-bold p-2">
                        With a passion for web and iOS development, I have honed my skills in Python, JavaScript, C/C++, and more. I enjoy solving programming challenges and am experienced with tools like Visual Studio Code, PyCharm, IntelliJ, and frameworks such as React Native and React.js.
                    </p>
                    <p className="text-xl font-bold p-2">
                        Currently based in Fort Worth, TX, I'm eager to leverage my skills and knowledge in a professional setting.
                    </p>
                    <div className='p-4 space-x-4'>
                        <Link href="#about">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                More About Me
                            </button>
                        </Link>
                        <Link href="#projects">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                Recent Works
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
