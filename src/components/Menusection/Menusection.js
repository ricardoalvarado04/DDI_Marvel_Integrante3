import './Menusection.css';

const Menusection = () => {    

    return (
        <div className='menusec'> 
            <ul>
                <li className='list-item'>
                    <a className='sect-link' id="1" href='/'>
                        <span class="sect-text">
                            OVERVIEW
                        </span>
                    </a>
                </li>
                <li className='list-item'>
                    <a className='sect-link' id="2" href='/'>
                        <span class="sect-text">
                            ON SCREEN PROFILE
                        </span>
                    </a>
                </li>
                <li className='list-item'>
                    <a className='sect-link' id="3" href='/'>
                        <span class="sect-text">
                            ON SCREEN FULL REPORT
                        </span>
                    </a>
                </li>
                <li className='list-item'>
                    <a className='sect-link' id="4" href='/'>
                        <span class="sect-text">
                            IN COMICS PROFILE
                        </span>
                    </a>
                </li>
                <li className='list-item'>
                    <a className='sect-link' id="5" href='/'>
                        <span class="sect-text">
                            IN COMICS FULL REPORT
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menusection;