import React from 'react'

const ReviewCard = ({ review }) => {
    const { img, city, name, body } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{body}</p>
                <div className="card-actions items-center mt-8 ">
                    <div className="avatar ">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h2 className="font-bold text-xl">{name}</h2>
                        <h3>{city}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
