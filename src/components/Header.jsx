import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleSearch } from '../store/slices/search'
import { useDispatch, useSelector } from 'react-redux'
import { handleMode, selectMode } from '../store/slices/mode'

export default function Header() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const mode = useSelector(selectMode)
  return (
    <>
      <div className={` ${mode ? "" : 'bg-[#2b3945]'} flex justify-around items-center w-full  p-7 text-white`} >
        <div className={`${mode ? "bg-[#2b3945]" : ""} bg-transparent`}>
          <Link to={""}>
            <img src="world.gif" className='w-[70px]' alt="" />
          </Link>
        </div>
        <div className='shadow-[0_10px_60px_rgba(0,0,0,0.5)]'>
          <input
            type="text"
            placeholder='Search country'
            className={`${mode ? "text-black" : ''} bg-transparent  p-2`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link to={'search'}>
            <button onClick={() => {
              dispatch(handleSearch({ search: inputValue }))
              setInputValue("")
            }}>&#128269;</button>
          </Link>
        </div>
        <div onClick={() => dispatch(handleMode({boolean:mode}))}>
          {mode  ? <img src="dark-mode.webp" className='w-[50px]'/> : <img src="light-mode.webp" className='w-[80px]'/>}
        </div>
      </div>
      <hr />
    </>
  )
}
