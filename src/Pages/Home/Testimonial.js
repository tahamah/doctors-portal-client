import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            city: 'California',
            body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
        },
        {
            _id: 2,
            name: 'Winson Herry',
            city: 'California',
            body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
        },
        {
            _id: 3,
            name: 'Winson Herry',
            city: 'California',
            body: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
        },
    ]
    return (
        <section>
            <div className="flex justify-between items-center my-28">
                <div>
                    <h3 className="text-secondary text-xl font-bold">
                        Testimonial
                    </h3>
                    <h1 className="text-3xl">What Our Patients Says</h1>
                </div>
                <div>
                    <img
                        className="md:w-[192px] w-24 h-[156px]"
                        src={quote}
                        alt=""
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {reviews.map((review) => (
                    <ReviewCard key={review._id} review={review}></ReviewCard>
                ))}
            </div>
        </section>
    )
}

export default Testimonial
