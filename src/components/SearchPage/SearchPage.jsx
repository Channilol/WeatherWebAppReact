import './SearchPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DaysContainer from '../daysContainer/DaysContainer'
import NavMenu from '../navMenu/NavMenu'

const SearchPage = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [weekDays, setWeekDays] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [toSearch, setToSearch] = useState('')
    const [loading, setLoading] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            setToSearch(inputValue)
        }
        setInputValue('')
    }

    useEffect(() => {
        setLoading(true)
        const fetchWeather = async () => {
            try { 
                if (toSearch !== '') {
                    const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${toSearch}?key=SWNT4HPTWM4PFXA4PEBV7H7JP`)
                    if (res.ok) {
                        const data = await res.json()
                        setWeatherData(data)
                        setWeekDays(data.days.slice(0, 7))
                        setLoading(false)
                    } else {
                        alert('Errore nel caricamento dei dati')
                    }
                } 
            } catch(err) {
                alert('Errore:', err)
            }
        }
        fetchWeather()
    },[toSearch])

    return(
        <div className='searchPage'>
            <NavMenu />
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Cerca una località</h1>
                <div>
                    <input type="text" placeholder='Scrivi qui una località' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
            </form>
            {!loading ? (
                <>
                <h1>{toSearch.toUpperCase()}</h1>
                <DaysContainer localName={weatherData.address} week={weekDays} /> 
                </>
           ) : ''}
        </div>
    )
}

export default SearchPage