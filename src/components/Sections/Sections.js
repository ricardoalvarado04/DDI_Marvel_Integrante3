import './Sections.css';

const Sections = () => {    

    return (
        <div className='contentsection'>            
                <div className='banner'>
                    <div className='descripcion'>
                        <div>
                            <span className='titleone' >SCOTT LANG</span>
                        </div>
                        <span className='titletwo'>ANT MAN</span>
                        <p className='description'>Ex-con Scott Lang finds a new lease on life, and a chance to redeem himself in the eyes of his daughter, after taking over the mantle of Ant-Man</p>
                        <div className='buttons'>
                            <a target="_self" class="cta-btn cta-btn--solid cta-btn--red " href="/">
                                <span className='innerFill'>
                                    <span>ON SCREEN</span>
                                </span>
                            </a>
                            <a target="_self" class="cta-btn cta-btn--solid cta-btn--red " href="/">
                                <span className='innerFill'>
                                    <span>IN COMICS</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Sections;