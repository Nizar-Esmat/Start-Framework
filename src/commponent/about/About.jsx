import React from 'react';

function About(props) {
    return (
        <div id="main"  className="text-zinc-50 flex flex-col justify-center  ">
           <h1 className="text-5xl font-bold mb-4  text-center">About Us</h1>

            <div className="flex items-center space-x-2 mx-auto my-2 ">
                <div id="star"></div>
                <i className="fa-solid fa-star"></i>
                <div id="star"></div>
            </div>
            <div className="flex items-center space-x-2 w-1/2 mx-auto my-2 ">
                <div >
                    <span className="">
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </span>
                </div>
                <div>
                    <span>

                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </span>

                </div>
            </div>
        </div>
    );
}

export default About;