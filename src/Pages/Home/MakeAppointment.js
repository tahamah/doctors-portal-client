import React from 'react'
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import MainBTN from '../Shared/MainBTN'
const MakeAppointment = () => {
    return (
        <section
            className=" md:flex justify-center items-center"
            style={{ backgroundImage: `url(${appointment})` }}
        >
            <div className="flex-1 hidden md:block">
                <img className="mt-[-130px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 text-white">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl">Make an appointment Today</h2>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsumis that it has a
                    more-or-less normal distribution of letters,as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page
                </p>
                <MainBTN> Get Started</MainBTN>
            </div>
        </section>
    )
}

export default MakeAppointment
