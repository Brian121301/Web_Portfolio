"use client";

import { useState } from "react";

const Imrs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const info = {
    summary: (
      <p className="pb-4">
        Developed a critical safety mobile app in collaboration with A-Shield LLC and a University of North Texas IT group. 
        The app enhances law enforcement response during active shooter situations using geofencing, real-time user status 
        updates, and a dynamic map. The application utilizes the Google Maps API within a React Native framework to provide 
        real-time user status updates on a dynamic heat map, delivering invaluable information for first responders.
      </p>
    ),

    moreInfo: (
      <div>
        <p>
          Developed a critical safety mobile application in collaboration with A-Shield LLC and a University of North Texas IT 
          group. The app enhances law enforcement response during active shooter situations using geofencing, real-time user 
          status updates, and a dynamic map. The application utilizes the Google Maps API within a React Native framework to 
          provide real-time user status updates on a dynamic heat map, delivering invaluable information for first responders.
        </p>

        <p className="font-bold pt-4 pb-2">Key Features:</p>

        <p className="p-4">
          Geofencing and Alerts: When a shooter incident is reported, a geofence is placed around the area. All users within 
          the geofence are alerted by the app. Regular users are directed to a status page with a description of the shooter and 
          location details. They can set their status on the situation using a color-coded system:
        </p>

        <div className="py-2 flex flex-col items-center">
          <p><strong className="text-green-500">Green</strong>: No sign of the shooter</p>
          <p><strong className="text-yellow-300">Yellow</strong>: Gunshots heard nearby</p>
          <p><strong className="text-red-600">Red</strong>: Shooter sighted</p>
        </div>

        <p className="font-bold py-2">First Responder Tools:</p>
        <p className="p-4">
          First responders have access to a heat map that shows all users' statuses and the description of the shooter. They can 
          drop pins on the map to coordinate their response. Different icons represent police, firefighters, and ambulance personnel, 
          enhancing coordination and communication.
        </p>

        <p className="font-bold pt-4 pb-2">Technology Stack:</p>

        <div className="p-4">
          <strong>React Native</strong>: Used for developing the mobile application, ensuring a smooth and responsive user experience.
          <p className="py-2">
            <strong>AWS Backend</strong>: AWS DynamoDB was employed for database management, and AWS Lambda was used to trigger 
            real-time updates. Whenever there was an update to the database, the Lambda function would activate and send updates to all 
            users, especially first responders, ensuring their heat maps were constantly updated to track the shooter.
          </p>
          <p className="py-2">
            <strong>Google Maps API</strong>: Integrated to create the dynamic map and heat map features, providing a visual and interactive 
            interface for both regular users and first responders.
          </p>
        </div>

        <p className="py-2 pb-4">
          This project honed my skills in mobile app development, real-time data processing, and geolocation services, while also enhancing 
          my ability to collaborate effectively in a team setting. It reflects my commitment to leveraging technology for public safety and 
          my proficiency in creating impactful, real-world solutions.
        </p>
      </div>
    )
  };

  return (
    <div>
      <div className="flex flex-col items-center shadow-md outline outline-1 w-full h-full rounded-lg p-8">
        <img
          src="IMRS.jpeg"
          alt="Status Page"
          className="h-76 w-72 object-contain rounded-lg"
        />

        <div>
          <h1 className="text-2xl font-bold">Incident Monitoring and Response System</h1>
          <div className="flex flex-row space-x-6 pt-2 pb-2">
            <h1 className="font-bold">Mobile Application</h1>
            <p>Sep 2023 - Mar 2024</p>
          </div>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-40'}`}>
            {isExpanded ? info.moreInfo : info.summary}
          </div>
        </div>

        <div className="flex flex-row">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          <a
            href="https://github.com/Control-Shift-Create-Capstone-23-24/IMRS-React-Native"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imrs;
