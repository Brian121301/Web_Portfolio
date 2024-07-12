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
            <div className="flex justify-center items-center space-x-4">
            <div>
                he
            </div>
                <div className="w-1/2 bg-white p-10 shadow-md rounded-lg">
                    <h1 className="text-4xl font-bold mb-6 text-center">Who Am I?</h1>
                    <div className="text-lg space-y-6">
                        <p>
                            Hi, I'm Brian Najera, a passionate programmer based in Fort Worth, TX. I recently
                            graduated from the University of North Texas with a Bachelor of Science in Computer
                            Science. I am a dedicated and adaptable person who thrives on challenges and is always
                            eager to learn new skills.
                        </p>
                        <p>
                            I have experience with various programming languages, including Python, JavaScript, C/C++,
                            HTML/CSS, SQL, and PHP. I am proficient in using tools like Visual Studio Code, Pycharm,
                            IntelliJ, and frameworks such as React Native and React.js. My technical background is
                            complemented by certifications in NSA Cybersecurity.
                        </p>
                        <p>
                            I have worked on several notable projects, including a mobile application aimed at improving
                            law enforcement response during active shooter incidents and an e-commerce website focused on unique,
                            hand-crafted goods. These experiences have honed my problem-solving skills and my ability to adapt
                            quickly to new challenges.
                        </p>
                        <p>
                            In my current role as a Team Manager at Pilot Flying J, I lead and manage a team, ensuring
                            efficient operations and a positive work environment. In my free time, I enjoy learning new
                            coding skills and embarking on new projects, driven by my love for programming and solving puzzles.
                        </p>
                        <p>
                            I am particularly interested in web development and iOS development and am excited about the
                            opportunities to grow and contribute to innovative projects in these fields.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
