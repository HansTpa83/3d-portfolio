import React from 'react'

export const companyName = (companyName) => {
    return (
        <div className='experiencesContent'>{companyName}</div>
    )
}

export const position = (position) => {
    const positions = position.split(",")
    return (
        <div className='experiencesContent'>
            {positions.map((position, index) => {
                return (
                    <React.Fragment key={index}>
                        {position}
                        <br />
                    </React.Fragment>
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
                    <React.Fragment key={index}>
                        {date}
                        <br />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

