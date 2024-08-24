import React from 'react';
import img1 from "/src/assets/start_bootstrap1.png";
import img2 from "/src/assets/start_bootstrap2.png";
import img3 from "/src/assets/start_bootstrap3.png";




function Profolio(props) {
    function getImgSrc(e) {
        console.log(e.target.src);
    }

    return (
        <div className="container flex flex-col justify-center m-6">
            <h1 className="my-4 text-center text-5xl font-bold">Portfolio Component</h1>

            <div className="flex items-center space-x-2 mx-auto my-2 ">
                <div id="star2" className="flex-1 h-0.5 bg-gray-300"></div>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div id="star2" className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            <div id="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex justify-center" id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center   "  > + </div>
                    <img src={img1} alt="img1" className="w-full h-auto"/>

                </div>
                <div className="flex justify-center" id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center   "> +</div>
                    <img src={img2} alt="img1" className="w-full h-auto"/>
                </div>
                <div className="flex justify-center" id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center   "> +</div>
                    <img src={img3} alt="img1" className="w-full h-auto"/>
                </div>
                <div className="flex justify-center" id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center   "> +</div>
                    <img src={img1} alt="img1" className="w-full h-auto"/>
                </div>
                <div className="flex justify-center" id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center   "> +</div>
                    <img src={img2} alt="img1" className="w-full h-auto"/>
                </div>
                <div className="flex justify-center"

                     id="img">
                    <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center     "> +</div>
                    <img
                        src={img3} alt="img1" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Profolio;
