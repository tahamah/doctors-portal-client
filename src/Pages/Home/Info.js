import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const info = [
        {
            id: 1,
            img: clock,
            title: 'Opening Hours',
            body: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: 'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id: 2,
            img: marker,
            title: 'Visit our location',
            body: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-accent',
        },
        {
            id: 3,
            img: phone,
            title: 'Contact us now',
            body: '+000 123 456789',
            bgColor: 'bg-gradient-to-r from-secondary to-primary',
        },
    ]
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 px-12">
            {info.map((item) => (
                <InfoCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Info
