import React from 'react'
const GamrCard = ({game}) => {
    const {title,coverPhoto, developer,ratings, description} = game;
    console.log(game)
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className=''
                    src={coverPhoto}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
               <div className='flex justify-between'>
                 <h2 className="card-title">{title}</h2>
                <h2>⭐ {ratings}</h2>
               </div>
               <h2>Developer : <span className='font-bold'>{developer}</span> </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white w-full bg-[#0cc0df]">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default GamrCard