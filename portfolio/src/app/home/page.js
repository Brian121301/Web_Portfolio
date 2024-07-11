import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center text-center mb-6 mr-20 p-20">
                    <h1 className="text-4xl font-bold p-4">Brian Najera</h1>
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
            <div>
                <h1 className="text-4xl font-bold p-4 text-center">Who Am I?</h1>
                <p className="text-center p-4">
                    I am a Full Stack Developer with a passion for creating
                </p>
            </div>
        </div>

    );
};

export default Home;
