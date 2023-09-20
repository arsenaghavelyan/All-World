import React, { useState } from 'react'
import Popup from './Popup'

export default function CountryList({ info }) {
    const [popup, setPopup] = useState(null)
    
    return (
        <>
            <div className='shadow-[0_0px_60px_rgba(0,0,0,0.3)]  h-[400px] cursor-pointer' onClick={() => setPopup(info)}>
                <div className='w-[350px] flex justify-center '>
                    <img src={`${info.flags.png}`} alt="" className='object-cover h-[200px] ' />
                </div>
                <div className='p-6 text-white'>
                    <div className='text-left font-bold'>
                        <h1>{info.name.common}</h1>
                    </div>
                    <div className='mt-5'>
                        <p>Population: <span className='text-gray-400'>{info.population}</span></p>
                    </div>
                    <div>
                        <p>Region: <span className='text-gray-400'>{info.region}</span></p>
                    </div>
                    <div>
                        <p>Capital: <span className='text-gray-400'>{info.capital}</span></p>
                    </div>
                </div>
            </div>
            {
                popup && (
                    <Popup  info={popup} onClose={() => setPopup(null)}/>
                )
            }
        </>
    )
}
