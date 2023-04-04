import React from "react";
import './Menubars.css';
import logo from "./../../Marvel-Comics-logo.png";
import logoin from "./../../logoin.png";
import logosuscribe from "./../../icon-mu-shield.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Menubars = () => {    

    return (
        <div className='menus'>
            <div className='menuuno'>
                <div className='profile'>
                    <div className="divlogoin">
                        <img src={logoin} alt="Logoin" className='logoin' id="logoin" />
                    </div>
                    <div id="username">
                        <span className='name'  href='/'>SIGN IN | JOIN</span>
                    </div>                    
                </div>
                <div className='logo'>
                    <img src={logo} alt="logo" className="logomarvel" id="Logo" />
                </div>
                <div className='divsuscribe'>
                    <div className='logomu'>
                        <img src={logosuscribe} alt="logosuscribe" className="logosuscribe" id="logosuscribe" />
                        <div class="suscribe">
                            <p>MARVEL UNLIMITED</p>
                            <span>SUBSCRIBE</span>
                        </div>  
                    </div>
                    <div className='search'>   
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className='menudos'>
                <ul className='listmenu'>
                    <li className='itemenu'>NEWS</li>
                    <li className='itemenu'>COMICS</li>
                    <li className='itemenu'>CHARACTERS</li>
                    <li className='itemenu'>MOVIES</li>
                    <li className='itemenu'>TV SHOWS</li>
                    <li className='itemenu'>GAMES</li>
                    <li className='itemenu'>VIDEOS</li>
                    <li className='itemenu'>MORE</li>
                </ul>
            </div>
        </div>

    );
}

export default Menubars;