import React from 'react'
import chair from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bgImg})` }}
                className="hero min-h-screen bg-white px-12"
            >
                <div className="hero-content  flex-col lg:flex-row-reverse ">
                    <img
                        src={chair}
                        className=" max-w-sm rounded-lg shadow-2xl"
                        alt=""
                    />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentBanner
