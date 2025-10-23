import React from 'react'
import Banner from '../Page/Banner'
import PopularGames from '../Page/PopularGames'
import Newslatter from '../Page/Newslatter'

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto bg-base-200 p-4'> 
            <Banner></Banner>
            <PopularGames></PopularGames>
            <Newslatter></Newslatter>
        </div>
    )
}

export default Home