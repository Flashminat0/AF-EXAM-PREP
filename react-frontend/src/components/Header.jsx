import React from 'react';
import {BsPen} from 'react-icons/bs';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="bg-green-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div
                    className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
                    <Link to="/">
                        <div className="flex items-center">
                            <span className="sr-only">Workflow</span>
                            <BsPen className={"h-10 w-auto"}/>
                            <div className="hidden ml-10 space-x-8 lg:block">
                                TODO APP
                            </div>
                        </div>
                    </Link>
                    <div className="ml-10 space-x-4">
                        <Link
                            className="inline-block bg-green-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                            to="/login"> Login </Link>
                        <Link
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-green-600 hover:bg-green-50"
                            to="/register"> Sign Up </Link>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    TODO APP
                </div>
            </nav>
        </header>
    );
};

export default Header;