import React from 'react'

export const companyName = (companyName) => {
    return (
        <div className='experiencesContent company'>{companyName}</div>
    )
}

export const position = (position) => {
    const positions = position.split(",")
    console.log(positions);
    return (
        <div className='experiencesContent position'>
            {positions.map((position, index) => {
                return (
                    <div key={index}>
                        {position}
                    </div>
                )
            })}
        </div>
    )
}

export const date = (dateString) => {
    const date = dateString.split(",")
    return (
        <div className='experiencesContent'>
            {date.map((date, index) => {
                return (
                    <div key={index}>
                        {date}
                    </div>
                )
            })}
        </div >
    )
}

