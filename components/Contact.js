import React from "react";
import Modal from "react-modal";

import styles from "../styles/contact.module.scss";

export default function Contact({ isOpen, onClose }) {
  return (
    <Modal className={styles.contactModal} isOpen={isOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h4>Modal title</h4>
      <p>Modal body</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
