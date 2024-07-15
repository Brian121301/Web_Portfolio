import React from 'react';

const Homepage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center text-center mb-6 mr-20 p-20">
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
            </div>
            <h1 className='text-6xl font-bold text-center'>About me</h1>
            <div>
                <p className="text-4xl font-bold text-center p-4">
                Hi, I'm Brian Najera, a recent Computer Science graduate from the University of 
                North Texas. </p>
                <p className="text-4xl font-bold text-center p-4">
                With a passion for web and iOS development, I have honed my skills 
                in Python, JavaScript, C/C++, and more. I enjoy solving programming challenges 
                and am experienced with tools like Visual Studio Code, PyCharm, IntelliJ, and 
                frameworks such as React Native and React.js. </p>
                <p className="text-4xl font-bold text-center p-4">
                Currently based in Fort Worth, TX, 
                I'm eager to leverage my skills and knowledge in a professional setting.
                </p>
            </div>
        </div>

    );
};

export default Homepage;
