import Skills from "./techs";

const About = () => {
    return (
        <div className="min-h-screen bg-blue-100 pt-20">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
                <div className="p-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-800">Who Am I?</h1>
                    <div className="text-lg space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            Hi, I'm Brian Najera, a passionate programmer based in Fort Worth, TX, and a 
                            recent Computer Science graduate from the University of North Texas. I thrive 
                            on challenges and am always eager to learn new skills.
                        </p>
                        <p>
                            I have experience with Python, JavaScript, C/C++, HTML/CSS, SQL, and PHP, and 
                            am proficient with tools like Visual Studio Code, PyCharm, IntelliJ, and frameworks 
                            such as React Native and React.js. My technical background includes certifications 
                            in Cybersecurity.
                        </p>
                        <p>
                            I've worked on notable projects, including a mobile app for improving law enforcement 
                            response during active shooter incidents and an e-commerce website designed to implement 
                            cybersecurity challenges in a real-world context. These experiences have honed my 
                            problem-solving skills and adaptability.
                        </p>
                        <p>
                            Currently, as a Team Manager at Pilot Flying J, I lead and manage a team, ensuring 
                            efficient operations and a positive work environment. In my free time, I enjoy learning 
                            new coding skills and embarking on new projects.
                        </p>
                        <p>
                            I am particularly interested in web and iOS development and am excited about opportunities 
                            to grow and contribute to innovative projects in these fields.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 bg-gray-200 p-8 rounded-lg shadow-lg">
                <Skills />
            </div>
        </div>
    );
};

export default About;
