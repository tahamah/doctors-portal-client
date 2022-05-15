import React from 'react'
import Footer from '../Shared/Footer'
import ContactUs from './ContactUs'
import ExceptionalCare from './ExceptionalCare'
import HomeBanner from './HomeBanner'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import OurServices from './OurServices'
import Testimonial from './Testimonial'

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Info />
            <OurServices />
            <ExceptionalCare />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
