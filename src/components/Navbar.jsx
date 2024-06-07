import LogoLight from '../assets/LogoLight.png';
import LogoDark from '../assets/LogoDark.png';

import { useState } from 'react'; 

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className='dark'>
            <img className='logo' src={LogoLight}></img>
            <div id='links'>
                <p>Home</p>
                <p>My Decks</p>
                <p>Deck Builder</p>
            </div>
        </nav>
    )
}

export default Navbar;