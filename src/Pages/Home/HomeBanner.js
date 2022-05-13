import React from 'react'
import chair from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'

const HomeBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImg})` }}
            class="hero min-h-screen bg-white px-12"
        >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    class=" max-w-sm rounded-lg shadow-2xl"
                    alt=""
                />
                <div>
                    <h1 class="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p class="py-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                    </p>
                    <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
