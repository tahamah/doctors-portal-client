import React from 'react'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard'
const OurServices = () => {
    const services = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            body: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
    ]
    return (
        <section>
            <div className="text-center my-28">
                <h3 className="text-secondary text-xl font-bold">
                    OUR SERVICES
                </h3>
                <h2 className="text-4xl">Services We Provide</h2>
            </div>
            <div className="grid gap-5 grid-cols-1  md:grid-cols-3 px-12">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    )
}

export default OurServices
