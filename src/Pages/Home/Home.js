import React from 'react'
import ExceptionalCare from './ExceptionalCare'
import HomeBanner from './HomeBanner'
import Info from './Info'
import OurServices from './OurServices'

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <HomeBanner />
            <Info />
            <OurServices />
            <ExceptionalCare />
        </div>
    )
}

export default Home
