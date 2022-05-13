import React from 'react'

const MainBTN = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
            {children}
        </button>
    )
}

export default MainBTN
