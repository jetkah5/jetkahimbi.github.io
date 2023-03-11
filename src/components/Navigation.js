import {FaBars,FaTimes} from 'react-icons/fa';
import React, {useState} from 'react'; 

const Navigations = ()=>{

    const [click, setClick] = useState(false)

    return(
        <div className={click ? "MobileNav":"navigation"}>
            <ul className='TopMenu'>
                <li>Acceuil</li>
                <li>Compentences</li>
                <li>Contact</li>
                <li>A propos</li>
            </ul>
            <button className='btn_mobile' onClick={()=>setClick(!click)}>
                {click ? <FaTimes/>:<FaBars />}
            </button>
        </div>
        
    );
}

export default Navigations