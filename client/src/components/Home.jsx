import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState();
    const handleCode = (e)=>{
      e.preventDefault();
      console.log(code);
      console.log("at line 13 in handledcode");
      setTimeout(() => {
          navigate('/gallery')
      }, 3000);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-[33rem]">
          <h1 className="text-4xl text-center font-bold text-white mb-4">Access Your Images From Anywhere</h1>
          <form className="m-3 flex items-center justify-center" onSubmit={handleCode}>
            <input placeholder='Enter the code' defaultValue="" className="border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:ring focus:ring-purple-500 mr-2" type="text" value={code} onChange={(e) => { setCode(e.target.value) }} />
            <button onClick={handleCode} className="bg-purple-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-purple-500" type="submit">Open</button>
          </form>
      </div>
  )
}
 
export default Home