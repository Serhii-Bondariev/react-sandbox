
import React from 'react';
import './modal.css';


const Modal = ({active, setActive, children}) => {
    return ( 
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            {children}
            <div>
             <form className="forma" action="">
             <h4>Modal</h4>
                <input type="text" placeholder="Name"/>
                <input type="data" placeholder="Phone"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="password"/>
              
          
                <button type="submit" placeholder="submit">Add to cart</button>
            </form>
             </div>
            </div>
        </div>
     );
}
 
export default Modal;