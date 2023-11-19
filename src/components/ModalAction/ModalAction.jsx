import { useEffect } from 'react';
import s from './ModalAction.module.scss'

export const ModalAction = ({ 
  objectModal, 
  toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  const handleCloseBackdrop = e => {
    if (e.target.nodeName !== 'DIV') return;
    toggleModal();
  };

  return (
    <div className={s.backdrop} onClick={handleCloseBackdrop}>
      <div className={s.modal}>
        <h2>Акція від Єгермайстер</h2>
        <img src={objectModal} alt="" />
        <br />
        <p>всі кошти з продажу цих позицій в цей день підуть до благодійного фонду</p>
      </div>
    </div>
  );
};
