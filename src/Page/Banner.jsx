import React from 'react'
import slideimg1 from '../assets/slideimg1.png'
import slideimg2 from '../assets/image2.png'
import slideimg3 from '../assets/slideimg3.png'

const Banner = () => {
  return (
    <div className="carousel w-full h-[30vh] rounded-xl mt-4 ">
      
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={slideimg1}
          className="w-full object-cover"
          alt="PUBG Banner"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slideimg2}
          className="w-full object-cover"
          alt="Valorant Banner"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slideimg3}
          className="w-full object-cover"
          alt="GTA Banner"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
