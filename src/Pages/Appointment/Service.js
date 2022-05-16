import React from 'react'

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class=" text-secondary text-2xl font-bold ">{name}</h2>
                <p>
                    {slots.length ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-500">Try Another Date</span>
                    )}
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'}{' '}
                    available
                </p>

                <div>
                    <label
                        onClick={() => setTreatment(service)}
                        for="booking-modal"
                        className="btn btn-primary btn-sm uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white"
                        disabled={slots.length === 0}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Service
