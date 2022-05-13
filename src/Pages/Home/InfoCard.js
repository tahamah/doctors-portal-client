import React from 'react'

const InfoCard = ({ item }) => {
    const { img, bgColor, title, body } = item
    return (
        <div className={`card lg:card-side shadow-xl   ${bgColor}`}>
            <figure className="pl-8 pt-8 md:pt-0">
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-gray-200">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default InfoCard
