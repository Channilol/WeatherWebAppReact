import './AboutMe.css'
import NavMenu from '../navMenu/NavMenu'

const AboutMe = () => {
    return(
        <>
        <NavMenu />
        <div className='aboutMe'>
            <div>
                <h1>Hi! I'm Francesco Cannizzo, the creator of this weather web app, I made it in roughly 12 hours with lots of trial and error.<br/>It's almost complete, it's only missing all weather conditions icons on the accordium. Hope you like it!</h1>
            </div>
        </div>
        </>
    )
}

export default AboutMe