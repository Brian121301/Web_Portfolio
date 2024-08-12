"use client";

import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-4xl font-bold mb-8">Contact Me Through</h1>
            <ul className="flex space-x-8">
                <li className="social-icons">
                    <a
                        href="https://github.com/Brian121301"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons text-5xl hover:text-blue-500"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/brian-najera-923279192"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons text-5xl hover:text-blue-500"
                    >
                        <AiFillLinkedin />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.instagram.com/brian_najera/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons text-5xl hover:text-blue-500"
                    >
                        <AiFillInstagram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
