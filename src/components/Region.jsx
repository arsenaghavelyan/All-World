import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRegion } from '../store/slices/region'
import Popup from './Popup'
import { selectMode } from '../store/slices/mode'

export default function Region() {
    const API_URL = "https://restcountries.com/v3.1"
    const region = useSelector(selectRegion)
    const [result, setResult] = useState([])
    const mode = useSelector(selectMode);

    // console.log(region);
    useEffect(() => {
        fetch(`${API_URL}/region/${region}`).then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res);
            setResult(res)
        })
    }, [region])

    const [popup, setPopup] = useState(null)

    return (
        <div className={`${mode ? '' : 'bg-[#2b3945]'}  flex flex-wrap justify-evenly  gap-[30px] `}>
            {
                result && result.map((el) => {
                    return (
                        <div key={Math.random()} className='h-[410px] bg-[#2b3945]'>
                            <div className='shadow-[0_0px_60px_rgba(0,0,0,0.3)] flex flex-col h-[400px] cursor-pointer' onClick={() => setPopup(el)}>
                                <div className='w-[350px] flex justify-center '>
                                    <img src={`${el.flags.png}`} alt="" className='object-cover h-[200px] ' />
                                </div>
                                <div className='p-6 text-white'>
                                    <div className='text-left font-bold'>
                                        <h1>{el.name.common}</h1>
                                    </div>
                                    <div className='mt-5'>
                                        <p>Population: <span className='text-gray-400'>{el.population}</span></p>
                                    </div>
                                    <div>
                                        <p>Region: <span className='text-gray-400'>{el.region}</span></p>
                                    </div>
                                    <div>
                                        <p>Capital: <span className='text-gray-400'>{el.capital}</span></p>
                                    </div>
                                </div>
                            </div>
                            {
                                popup && (
                                    <Popup info={popup} onClose={() => setPopup(null)} />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
