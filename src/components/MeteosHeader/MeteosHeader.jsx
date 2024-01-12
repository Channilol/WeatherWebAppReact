import './MeteosHeader.css'
import { Link } from 'react-router-dom'

const MeteosHeader = () => {
    return(
        <>
        <header>
            <Link to='/'><h1>METEOS</h1></Link>
        </header>
        </>
    )
}

export default MeteosHeader