import React, { useEffect, useRef } from 'react';

export default function Popup({ info, onClose }) {
    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" p-6 md:p-7 rounded-lg shadow-lg relative bg-[#2b3945]" ref={popupRef}>
                <img
                    src={info.flags.png === null ? 'no-image.jpg' : info.flags.png}
                    className="w-[200px] md:w-[500px] h-[250px] md:h-[370px] object-cover"
                    alt="no image"
                />
                <p className="w-full font-extrabold md:w-[700px] mt-3 text-white">{info.name.official}</p>
                <div>
                    <div className='mt-5'>
                        <p className='font-semibold  text-white'>Population: <span className='font-light text-gray-400'>{info.population}</span></p>
                    </div>
                    <div>
                        <p className='font-semibold text-white'>Region: <span className='font-light text-gray-400'>{info.region}</span></p>
                    </div>
                    <div>
                        <p className='font-semibold text-white'>Capital: <span className='font-light text-gray-400'>{info.capital}</span></p>
                    </div>
                    <div>
                        <a href={`https://en.wikipedia.org/wiki/${info.name.official}`} target='blank' className='text-blue-400 ml-[350px] border-b border-blue-500'>{info.name.official}</a>
                    </div>
                </div>
                <span onClick={onClose} className="w-6 h-6 md:w-8 md:h-8 absolute top-3 right-4 cursor-pointer text-white">&#10005;</span>
            </div>
        </div>
    );
}