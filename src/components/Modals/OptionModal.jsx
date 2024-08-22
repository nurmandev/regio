import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const OptionModal = ({ isOpen, onClose, children, button }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] flex justify-center bg-black bg-opacity-10 items-end md:items-center backdrop-blur-md transition-opacity ${
          modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div className="z-[100]">
        {modalOpen ? (
          <FaTimes
            className="bg-white rounded-full p-2 border mb-3"
            size={42}
            onClick={handleClose}
          />
        ) : (
          button
        )}
        <div
          className={`drop-shadow-primary absolute  bg-white rounded-lg p-6 w-[95%] transform transition-transform duration-500 ease-in-out ${
            modalOpen ? "scale-100 translate-x-0" : "scale-0 -translate-x-100"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default OptionModal;
