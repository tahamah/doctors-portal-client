import { format } from 'date-fns'
import React from 'react'

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment
    const handleBooking = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        //to close the modal
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                    <h3 class="font-bold py-5 text-lg">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-5 justify-items-center my-5"
                    >
                        <input
                            disabled
                            type="text"
                            value={format(date, 'PP')}
                            class="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            class="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((s, i) => (
                                <option key={i} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            class="btn w-full max-w-xs"
                        />
                    </form>

                    <label
                        for="booking-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
