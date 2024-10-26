import React from 'react'
import Stopwatch from './Stopwatch'
import ScrollingIntoView from './ScrollingIntoView'

const RefHome = () => {
    return (
        <>
            <ul className='mt-5'>
                <li>Refs do not cause re-rendering</li>
                <li>Store information between re-renders</li>
                <li>can't use in return function</li>
            </ul>
            <Stopwatch />
            <ScrollingIntoView />

        </>
    )
}

export default RefHome