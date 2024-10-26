import React, { useState } from 'react'
import Map from './Map.jsx';

const MapHome = () => {
    const [zoomLevel, setZoomLevel] = useState(0);

    return (
        <div className='mt-2'>
            <h3>Inserting a map using useEffect</h3>
            Zoom level: {zoomLevel}x
            <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
            <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
            <hr />
            <Map zoomLevel={zoomLevel} />
        </div>
    )
}

export default MapHome