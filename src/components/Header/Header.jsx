import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { HiArrowsPointingIn } from 'react-icons/hi2';

import './Header.css';

const Header = ({title,handle,state}) =>{
    return(
        <div className='toolbar'>  
            <FaFreeCodeCamp />
            <span>{title} </span> 
            <div className='right'
                 onClick={handle}
            >
            {state 
                ? <HiArrowsPointingIn />
                : < BsArrowsFullscreen />
            }
            </div>
        </div>
  )
}

export default Header;
