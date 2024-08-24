import React from 'react';

function Contact(props) {
    return (


        <form className="max-w-lg mx-auto p-6">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name"
                       className="border-b-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your Name" required/>
            </div>

            <div className="mb-5">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                <input type="number" id="age"
                       className="border-b-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your Age" required/>
            </div>

            <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" id="username"
                       className="border-b-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your Username" required/>
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password"
                       className="border-b-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Your Password" required/>
            </div>

            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>


    );
}

export default Contact;