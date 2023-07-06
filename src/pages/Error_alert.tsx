import React from 'react';

const Error_alert = () => {
    return (
        <>
            <div id="alert-additional-content-1" className="p-4 mb-4 my-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium">This is a info alert</h3>
                </div>
                <div className="mt-2 mb-4 text-sm">
                    Not found information.
                </div>
                <div className="flex">
                    <a href='/home' className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back
                    </a>
                </div>
            </div>

        </>


    );
};

export default Error_alert;