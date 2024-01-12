import './DaysContainer.css'
import { useState, useEffect } from 'react'
import Days from '../days/Days'

const DaysContainer = ({localName, week}) => {
    const [searchResult, setSearchResult] = useState(localName)
    const [weekArray, setWeekArray] = useState(week)

    useEffect(() => {
        console.log(week)
    }, [])

    return (
        <div className='daysContainer'>
            {week.map((singleDay) => {
                return <Days key={singleDay.datetime} dayObj={singleDay} cityName={localName}/>
            })}
        </div>
    )
}

export default DaysContainer