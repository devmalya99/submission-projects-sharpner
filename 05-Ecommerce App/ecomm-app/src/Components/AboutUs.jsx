import React from 'react';

const AboutUs = () => (
    <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-3/4 bg-white rounded shadow-xl p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
                About Our Band
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-center">
                    <img className="m-auto rounded-full h-32 w-32 md:h-64 md:w-64" 
                         src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                         alt="band" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
                    <h2 className="text-xl font-bold text-gray-800 mt-4 md:mt-0">
                        The Music Band
                    </h2>
                    <p className="text-gray-600 my-4">
                        Making soulful music since 2005. We believe in the power of music to heal 
                        and inspire. We have performed in over 30 countries, spreading our diverse 
                        sounds to millions of fans.
                    </p>
                    <button className="mt-4 pb-1 border-b-2 border-blue-400 hover:border-blue-500">
                        Read More About Us
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;