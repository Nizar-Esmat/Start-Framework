import React from 'react';
import img from "/src/assets/start_bootstrap1.svg";

function Home(props) {
    return (
        <div id="main" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-zinc-50 p-6">
            {/* Image Section */}
            <img src={img} alt="Home" className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-6" />

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-4">
                Start Framework
            </h1>
            <div className="flex items-center space-x-2">
                <div id="star"></div>
                <i className="fa-solid fa-star"></i>
                <div id="star"></div>
            </div>

            {/* Subtext */}
            <span className="text-lg font-medium text-center">
                Graphic Artist - Web Designer - Illustrator
            </span>
        </div>
    );
}

export default Home;
