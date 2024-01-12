import './Days.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DayDetails from '../dayDetails/DayDetails'
import Humidity from '../../assets/image/humidity.svg'
import Rain from '../../assets/image/rain.svg'
import Wind from '../../assets/image/wind.svg'
import Sunny from '../../assets/image/sunny.svg'
import Rainy from '../../assets/image/rainy.svg'
import Cloudy from '../../assets/image/cloudy.svg'

const Days = ({dayObj, cityName}) => {
    const [dayData, setDayData] = useState(dayObj)
    const [nameOfDay, setNameOfDay] = useState('')
    const [monthAndDay, setMonthAndDay] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [minTemp, setMinTemp] = useState('')
    const [temp, setTemp] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [isDetailsOn, setIsDetailsOn] = useState(false)

    useEffect(() => {
        const dateObject = new Date(dayData.datetime)
        const dayOfWeek = dateObject.getDay()
        const nameOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        setNameOfDay(nameOfDays[dayOfWeek])

        const month = dateObject.getMonth() + 1
        const day = dateObject.getDate()
        const nameOfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const monthPlusDay = day + ' ' + nameOfMonths[month]

        setMonthAndDay(monthPlusDay)

        setMaxTemp(FarhToCels(dayData.tempmax))
        setMinTemp(FarhToCels(dayData.tempmin))
        setTemp(FarhToCels(dayData.temp))
        setIsLoaded(true)
    },[])

    const FarhToCels = (degrees) => {
        if (typeof degrees !== 'number' || isNaN(degrees)) {
            return 'error';
        }
        const celsius = ((degrees-32) * 5) / 9
        return parseFloat(celsius.toFixed(0) + '°C')
    }

    const changeWeatherImg = () => {
        switch(dayObj.conditions) {
            case 'Partially cloudy':
                return Cloudy
                break;
            case 'Rain, overcast':
                return Rainy
                break;
            case 'Rain, Partially cloudy':
                return Rainy
                break;
            default:
                return Sunny
        }
    }

    const handleDetailsPageOn = () => {
        setIsDetailsOn(true)
    }

    const handleDetailsPageOff = () => {
        setIsDetailsOn(false)
    }

    return (
        isLoaded ? (
            <>
            {isDetailsOn ? <DayDetails nameCity={cityName} dayDet={dayObj} isShow={isDetailsOn} closeFun={() => handleDetailsPageOff()}/> : null}
            <div className='dayCard' onClick={() => handleDetailsPageOn()}>
                <p>{nameOfDay}</p>
                <p>{monthAndDay}</p>
                <img className='weatherImg' src={changeWeatherImg()} />
                <p className='temperatures'>{maxTemp}°C | {minTemp}°C</p>
                <div className='hiddenStats'>
                    <div>
                        <img src={Wind} alt='wind' />
                        <p>{dayObj.windspeed} Mp/h</p>
                        <p>Wind</p>
                    </div>
                    <div>
                        <img src={Humidity} alt='humidity' />
                        <p>{dayObj.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <img src={Rain} alt='rain' />
                        <p>{dayObj.precipprob}%</p>
                        <p>Rain</p>
                    </div>
                </div>
            </div>
            </>
        ) : null
    )
}

export default Days