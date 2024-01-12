import { useState, useEffect } from 'react'
import './DayDetails.css'

const DayDetails = ({nameCity, dayDet, isShow, closeFun}) => {
    const [isShown, setIsShown] = useState(isShow)
    
    useEffect(() => {
        console.log(dayDet)
    },[])

    useEffect(() => {
        setIsShown(isShow)
    })

    return(
        <div className={'details'}>
            <h1>{nameCity.toUpperCase()}</h1>
            <ul>
                <li>Cloudcover: {dayDet.cloudcover}</li>
                <li>Conditions: {dayDet.conditions}</li>
                <li>Datetime: {dayDet.datetime}</li>
                <li>Description: {dayDet.description}</li>
                <li>Dew: {dayDet.dew}</li>
                <li>Apparent Temperature: {dayDet.feelslike}</li>
                <li>Max Apparent Temperature: {dayDet.feelslikemax}</li>
                <li>Min Apparent Temperature: {dayDet.feelslikemin}</li>
                <li>Humidity: {dayDet.humidity}</li>
                <li>Moonphase: {dayDet.moonphase}</li>
                <li>Precipitation: {dayDet.precip}</li>
                <li>Precipitation Cover: {dayDet.precipcover}</li>
                <li>Precipitation Probability: {dayDet.precipprob}</li>
                <li>Pressure: {dayDet.pressure}</li>
                <li>Severe Risk: {dayDet.severerisk}</li>
                <li>Snow: {dayDet.snow}</li>
                <li>Snow Depth: {dayDet.snowdepth}</li>
                <li>Solar Energy: {dayDet.solarenergy}</li>
                <li>Solar Radiation: {dayDet.solarradiation}</li>
                <li>Sunrise: {dayDet.sunrise}</li>
                <li>Sunset: {dayDet.sunset}</li>
                <li>Temperature: {dayDet.temp}</li>
                <li>Max Temperature: {dayDet.tempmax}</li>
                <li>Min Temperature: {dayDet.tempmin}</li>
                <li>UV Index: {dayDet.uvindex}</li>
                <li>Visibility: {dayDet.visibility}</li>
                <li>Wind Direction: {dayDet.winddir}</li>
                <li>Wind Gust: {dayDet.windgust}</li>
                <li>Wind Speed: {dayDet.windspeed}</li>
            </ul>
            <button onClick={closeFun}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button>
        </div>
    )
}

export default DayDetails