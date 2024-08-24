import React from 'react';


function ImageModal({ isOpen, src, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-3xl font-bold">
                    &times;
                </button>
                <img src={src} alt="Popup" className="max-w-full max-h-screen rounded" />
            </div>
        </div>
    );
}

export default ImageModal;
