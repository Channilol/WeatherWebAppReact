import './InteractiveMap.css'
import NavMenu from '../navMenu/NavMenu'

const InteractiveMap = () => {
    return(
        <>
        <NavMenu />
        <div className='interactiveMapDiv'>
            <iframe src="https://embed.windy.com/embed2.html?lat=39.470&lon=14.194&detailLat=42.462&detailLon=14.205&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
            frameBorder="0"></iframe>
        </div>
        </>

    )
}

export default InteractiveMap