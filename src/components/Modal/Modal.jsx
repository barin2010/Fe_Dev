import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Modal.module.css';
import logo from '../../images/icons/logoWhiteMobile.svg';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };
  return (
    <div className={css.modal}>
      <div className={css.logoHeader}>
        <img src={logo} alt="logo" />
        <div className={css.modalCross} onClick={onClose}>
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.81836"
              y="0.61084"
              width="10"
              height="1"
              rx="0.5"
              transform="rotate(45 1.81836 0.61084)"
              fill="white"
            />
            <rect
              x="1.11133"
              y="7.68213"
              width="10"
              height="1"
              rx="0.5"
              transform="rotate(-45 1.11133 7.68213)"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <ul className={css.modalNav}>
        <li className={css.modalItem}>
          <NavLink
            exact
            to="/"
            className={css.modalLink}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li className={css.modalItem}>
          <NavLink
            exact
            to="/about"
            className={css.modalLink}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
        </li>
        <li className={css.modalItem}>
          <NavLink
            exact
            to="/services"
            className={css.modalLink}
            onClick={handleLinkClick}
          >
            Services
          </NavLink>
        </li>
        <li className={css.modalItem}>
          <NavLink
            exact
            to="/careers"
            className={css.modalLink}
            onClick={handleLinkClick}
          >
            Careers
          </NavLink>
        </li>
      </ul>
      <button className={css.btn} onClick={handleLinkClick}>
        Contact Us
      </button>
    </div>
  );
};

export default Modal;
