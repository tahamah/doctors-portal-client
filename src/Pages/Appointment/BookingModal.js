import { format } from 'date-fns'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment
    const [user] = useAuthState(auth)
    const handleBooking = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        //to close the modal
        setTreatment(null)
    }
    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <h3 className="font-bold py-5 text-lg">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-5 justify-items-center my-5"
                    >
                        <input
                            disabled
                            type="text"
                            value={format(date, 'PP')}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            disabled
                            type="text"
                            name="name"
                            value={user?.displayName || ''}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            disabled
                            type="email"
                            name="email"
                            value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn w-full max-w-xs"
                        />
                    </form>

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
