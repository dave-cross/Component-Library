import React, { useState, useEffect } from "react";
import shortid from "shortid";
import ReactModal from "react-modal";

import css from "./Modal.module.scss";

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>;
  onRequestClose(): void;
  isOpen: boolean;
}

const Modal = ({ children, isOpen, onRequestClose }: IProps) => {
  // Ensure all IDs are unique throughout the site.
  const shortId = shortid.generate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <div className={css["vrst-modal"]}>
      <ReactModal
        isOpen={showModal}
        aria={{
          labelledby: `modal-title-${shortId}`
        }}
        onRequestClose={onRequestClose}
        closeTimeoutMS={250}
        className="vrst-modal" // Used to remove default styles.
        overlayClassName="vrst-modal-overlay" // Used to remove default styles.
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
