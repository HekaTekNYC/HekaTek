import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', padding: 20, borderRadius: 5 }}>
                <p>Cookies are needed to use the scheduling feature. Would you like to proceed to the scheduling page?</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
};

export default Modal;
