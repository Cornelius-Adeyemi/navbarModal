import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

export function Home(props){

    const {modal,menu, openModal, openMenu}= useGlobalContext();
    
    return (<div className='home'>
    <span onClick={openMenu}><FaBars className='menu-bar'/></span>

    <button onClick={openModal} className='modal-button'> Show Modal</button>
        
    </div>)
}