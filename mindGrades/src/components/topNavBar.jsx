import React, { useState } from 'react';

const TopNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src="path_to_logo" alt="Logo" className="w-10 h-10 rounded-full" />
                <h1 className="ml-4 text-xl font-bold">Welcome Rahul!</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 bg-red-200 rounded-full px-3 py-1">
                    <span className="text-orange-500">🔥</span>
                    <span className="text-red-600">2</span>
                </div>
                <button className="bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded-full">
                    Explore Community
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                    Polity <span className="ml-1 text-white">▼</span>
                </button>
                <a href="#contact"><img src=".\images\Call Chat.png" alt="Call" className="w-6 h-6" /></a>
            </div>
        </div>
    );
};

export default TopNavBar;
