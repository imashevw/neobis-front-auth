import React, {useState} from 'react';
import Modal from '../../components/Modal';
import './Enter.css';

function Enter() {
  const [modal, setModal] = useState(false);

  return (
    <div className="wrapper">
      {modal && <Modal setModal={setModal} />}
      <div className='container fl-col-ai-cen jus-cen'>
        <h2>С возвращением!</h2>
        <h3>Lorby - твой личный репетитор</h3>
        <img className='welcomeImg' src="./img/bg.png" alt="" />
        <button className='white-btn btnExit mb25' onClick={() => setModal(true)}>Выйти</button>
      </div>
    </div>

  );
}

export default Enter;