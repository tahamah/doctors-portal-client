import React from 'react'

const ServiceCard = ({ service }) => {
    const { img, title, body } = service
    return (
        <div>
            <div className="card lg:max-w-lg  bg-base-100 shadow-xl px-12">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt=""
                        className="rounded-xl w-[116px] h-[115px]"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
