import React, { useState } from 'react';
import img1 from "/src/assets/start_bootstrap1.png";
import img2 from "/src/assets/start_bootstrap2.png";
import img3 from "/src/assets/start_bootstrap3.png";
import ImageModal from "../ImageModal/ImageModal.jsx";

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImgSrc, setSelectedImgSrc] = useState(null);

    function handleImageClick(e) {
        setSelectedImgSrc(e.currentTarget.querySelector("img").src);
        console.log(e.target.src);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
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
                {[img1, img2, img3, img1, img2, img3].map((src, index) => (
                    <div key={index} className="flex justify-center" id="img" onClick={handleImageClick}>
                        <div id="layout" className="text-zinc-50 text-7xl flex justify-center items-center"> + </div>
                        <img src={src} alt={`img${index + 1}`} className="w-full h-auto cursor-pointer"/>
                    </div>
                ))}
            </div>

            <ImageModal  isOpen={isModalOpen} src={selectedImgSrc} onClose={closeModal} />
        </div>
    );
}

export default Portfolio;
