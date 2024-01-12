import './MeteosHome.css'
import ItaliaMappa from '../../assets/image/italia.svg'
import ArrowLeft from '../../assets/image/arrowLeft.svg'
import ArrowRight from '../../assets/image/arrowRight.svg'
import { Link } from 'react-router-dom'

const MeteosHome = () => {
    return( 
        <div className='homepage'>
            <Link to='/interactiveMap'>
                <div className='homeLeft'>
                    <p>MAPPA INTERATTIVA</p>
                    <img src={ItaliaMappa} alt='MappaItalia' />
                    <img src={ArrowLeft} className='afterHover1'/>
                </div>
            </Link>
            <Link to='/search'>
                <div className='homeRight'>
                    <h2>Cerca una<br/>regione/città</h2>
                    <img src={ArrowRight} className='afterHover2'/>
                </div>
            </Link>
        </div>
    )
}

export default MeteosHome