import React, { useEffect, useState, useRef } from "react";

const MyModal = ({ isOpen, onClose, text, hasCloseBtn = true }) => {
  const ref = useRef();

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = ref.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <>
      <dialog ref={ref} id="modal" className="modal">
        <p>{text}</p>
        {hasCloseBtn && (
          <button onClick={handleCloseModal} id="closeModal" className="modal-close-btn">
            Close
          </button>
        )}
      </dialog>
    </>
  );
};

export default MyModal;
