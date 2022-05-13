import React from 'react'

const ServiceCard = ({ service }) => {
    const { img, title, body } = service
    return (
        <div>
            <div class="card lg:max-w-lg  bg-base-100 shadow-xl px-12">
                <figure class="px-10 pt-10">
                    <img
                        src={img}
                        alt=""
                        class="rounded-xl w-[116px] h-[115px]"
                    />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
