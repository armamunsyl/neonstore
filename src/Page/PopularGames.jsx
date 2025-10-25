import React, { use } from 'react'
import GamrCard from './GamrCard'

const gamePromise = fetch("/games.json").then(res=> res.json())

const PopularGames = () => {
    const populerGames = use(gamePromise);
    // console.log(populerGames)
    return (
       <div >
        <h1 className='text-3xl font-bold mt-4 mb-4 text-center'>Popular Games</h1>
        <div className='grid grig-cols-1 md:grid-cols-3 gap-3 mt-4 mb-4'>
                    {
            populerGames.map(game=><GamrCard key={game.id} game={game}></GamrCard>)
        }
         
        </div>

       </div>
    )
}

export default PopularGames