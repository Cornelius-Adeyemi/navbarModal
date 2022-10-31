import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from "./context";


export function Modal(props){
    const {modal,closeModal}= useGlobalContext();

    return (<div>
    <div  className={modal?"modal showModal":"modal"}> 
     <span onClick={closeModal}> <FaTimes/> </span> 
     <h3>Modal content </h3>
     </div>
    
    
    <div onClick={closeModal} className={modal?"overlay showOverlay":"modal"}> </div>
    </div>)
}