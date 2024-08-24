import React from 'react';

function Footer(props) {
    return (


        <footer className=" w-full  bg-gray-700  p-7 shadow dark:bg-gray-900 text-zinc-50">
            <div className="flex flex-col md:flex-row justify-between gap-3">
                <div className="flex flex-col items-center md:items-start gap-3 ">
                    <h1 className="text-lg font-semibold m-auto">Location 1</h1>
                    <span className="m-auto" >2215 John Daniel Drive</span>
                    <span className="m-auto">Clark, MO 65243</span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-lg font-semibold m-auto">AROUND THE WEB</h1>
                    <div className="flex gap-4">
                        <i className="fa-brands fa-facebook fa-2xl p-2 hover:text-blue-600"></i>
                        <i className="fa-brands fa-twitter fa-2xl p-2 hover:text-blue-400"></i>
                        <i className="fa-brands fa-google fa-2xl p-2 hover:text-red-500"></i>
                        <i className="fa-brands fa-instagram fa-2xl p-2 hover:text-pink-500"></i>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start gap-3">

                    <h1 className="text-lg font-semibold m-auto ">
                        ABOUT FREELANCER
                    </h1>
                    <span className="m-auto">
                        Freelance is a free to use, licensed Bootstrap theme created by Route
                    </span>

                </div>
            </div>
            <div className="mt-8 border-t border-gray-600 pt-4">

                <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">

            <span className="text-sm text-gray-500 dark:text-gray-400 m-auto ">
                © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>.
                All Rights Reserved.</span>
                </div>
            </div>
        </footer>


    );
}

export default Footer;