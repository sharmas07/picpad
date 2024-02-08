import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "../baseURL";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const handleCode = async (e) => {
    
    setIsLoading(true);
    e.preventDefault();
    console.log(code);
    try {
      console.log()
      const { data } = await axios.post(`${baseURL}/checkuser`, {username:code});
      console.log(data);
      if (data && code.length >=1) {
        localStorage.setItem("username", data.username);
        navigate("/gallery");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[33rem]">
      <h1 className="text-4xl text-center font-bold text-white mb-4">
        Access Your Images From Anywhere
      </h1>
      <form
        className="m-3 flex items-center justify-center"
        onSubmit={handleCode}
      >
        <input
          placeholder="Enter the code"
          defaultValue=""
          className="border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:ring focus:ring-purple-500 mr-2"
          type="text"
          value={code}
          onChange={(e) => {
            const newCode = e.target.value;
            if (newCode.length >= 1) {
                setCode(newCode);
            }
            
          }}
        />
        <button
          onClick={handleCode}
          className="bg-purple-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
          type="submit"
        >
          Open
        </button>
      </form>
      {isLoading && <h1>loading...</h1>}
    </div>
  );
};

export default Home;
