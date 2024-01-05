import React ,{ useState, setActive} from 'react';
import Modal from './Modal/Modal';
import './App.css';

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    return ( 
        <div className="App">
        
        <header className="header">
         <div>
            <h1>LOGO</h1>
         </div>
        </header>
        <nav className="menu">
         <link></link>
        </nav>
        <aside className="right">
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
         </ul>
        </aside>
             <main className="main">
                <button className="open-btn" onClick={() => setModalActive(true)}>Modal</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </main>

             <footer className="footer">
               <p>Lorem</p>
               <p>Lorem</p>
               <p>Lorem</p>
               <p>Lorem</p>
               <p>Lorem</p>
               <p>Lorem</p>
             </footer>

             <Modal active={modalActive} setActive={setModalActive}/>
            
               
            
             {/* <Modal  active={modalActive} setActive={setModalActive}></Modal> */}

        </div>
     );
}
 
export default App;