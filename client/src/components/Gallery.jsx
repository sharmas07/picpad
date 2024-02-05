import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate = useNavigate();
    const token = ''
    const checkAuth = ()=>{
        if(!token){
            navigate('/');
        }
    }
    const [images, setImages] = useState([]);
    const imgs = [
        "https://afksvlotdeldhwwqnghf.supabase.co/storage/v1/object/sign/userimages/antique%20Timeline%20Watch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyaW1hZ2VzL2FudGlxdWUgVGltZWxpbmUgV2F0Y2guanBnIiwiaWF0IjoxNzA3MTE2NTgxLCJleHAiOjE3MDc3MjEzODF9.Oda80bHMpk8EZgYH2D8Snt3x5kKMVHDWyICnToSQdTk&t=2024-02-05T07%3A03%3A03.245Z",
        "https://afksvlotdeldhwwqnghf.supabase.co/storage/v1/object/sign/userimages/antique%20Timeline%20Watch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyaW1hZ2VzL2FudGlxdWUgVGltZWxpbmUgV2F0Y2guanBnIiwiaWF0IjoxNzA3MTE2NTgxLCJleHAiOjE3MDc3MjEzODF9.Oda80bHMpk8EZgYH2D8Snt3x5kKMVHDWyICnToSQdTk&t=2024-02-05T07%3A03%3A03.245Z",
        "https://afksvlotdeldhwwqnghf.supabase.co/storage/v1/object/sign/userimages/antique%20Timeline%20Watch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyaW1hZ2VzL2FudGlxdWUgVGltZWxpbmUgV2F0Y2guanBnIiwiaWF0IjoxNzA3MTE2NTgxLCJleHAiOjE3MDc3MjEzODF9.Oda80bHMpk8EZgYH2D8Snt3x5kKMVHDWyICnToSQdTk&t=2024-02-05T07%3A03%3A03.245Z",
        "https://afksvlotdeldhwwqnghf.supabase.co/storage/v1/object/sign/userimages/antique%20Timeline%20Watch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyaW1hZ2VzL2FudGlxdWUgVGltZWxpbmUgV2F0Y2guanBnIiwiaWF0IjoxNzA3MTE2NTgxLCJleHAiOjE3MDc3MjEzODF9.Oda80bHMpk8EZgYH2D8Snt3x5kKMVHDWyICnToSQdTk&t=2024-02-05T07%3A03%3A03.245Z",
        "https://afksvlotdeldhwwqnghf.supabase.co/storage/v1/object/sign/userimages/antique%20Timeline%20Watch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyaW1hZ2VzL2FudGlxdWUgVGltZWxpbmUgV2F0Y2guanBnIiwiaWF0IjoxNzA3MTE2NTgxLCJleHAiOjE3MDc3MjEzODF9.Oda80bHMpk8EZgYH2D8Snt3x5kKMVHDWyICnToSQdTk&t=2024-02-05T07%3A03%3A03.245Z",
    ]
    useEffect(()=>{
        checkAuth();
        setTimeout(() => {
            setImages(imgs);
        }, 3000);
    }, [images]);
  return (
<div className="flex flex-col items-center justify-center min-h-[33rem] max-h-[33rem] bg-gray-800 m-4 p-3 rounded-2xl">
    <h1 className='text-4xl mb-8 text-white font-bold'>
        Gallery
    </h1>
    <div className="flex flex-wrap justify-center gap-4 overflow-y-scroll max-w-[44rem]">
        {images && images.map((item, index)=>{
            return (
                <div key={index} className="img_container rounded-lg overflow-hidden">
                    <img src={item} alt="item" className="w-40 h-40 object-cover" />
                </div>
            )
        })}
        <div className="img_container rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center w-40 h-40">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
</svg>

        </div>
    </div>
</div>

  )
}

export default Gallery