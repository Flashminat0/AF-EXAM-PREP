import React from 'react';
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";

const Home = () => {
    return (
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap grid items-center place-items-center justify-center">
                <div className={`grid grid-cols-8`}>
                    <div className="ml-4 mt-2 col-span-4 col-start-3">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            <div className={`w-full mx-auto`}>
                                <div className="mt-1 relative flex items-center">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                        <button className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className={`col-span-1`}></div>
                    <div className="ml-4 mt-3 flex-shrink-0 col-span-1">
                        <button
                            type="button"
                            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Create new Todo
                        </button>
                    </div>

                </div>

            </div>
            <br/>
            <hr/>
            <br/>
            <TodoCard/>
            <TodoCard/>
        </div>
    );
};

export default Home;