import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import logo from '../../images/icons/Logo.svg';
import burger from '../../images/icons/burger.svg';
import Modal from 'components/Modal/Modal';



const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleScroll = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className={css.navigation}>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={css.navigationList}>
            <li className={css.navigationItem}>
              <NavLink exact="/" сlassname={css.active}>
                Home
              </NavLink>
            </li>
            <li className={css.navigationItem}>
              <a href="#about" onClick={e => handleScroll(e, 'about')}>
                About
              </a>
            </li>
            <li className={css.navigationItem}>
              <a href="#services" onClick={e => handleScroll(e, 'services')}>
                Services
              </a>
            </li>
            <li className={css.navigationItem}>
              <a href="#careers" onClick={e => handleScroll(e, 'careers')}>
                Careers
              </a>
            </li>
          </ul>

          <a className={css.button} href="#!">
            Contact Us
          </a>
          <div
            className={`${css.burger} ${isModalOpen ? css.active : ''}`}
            onClick={openModal}
          >
            <img src={burger} alt="menu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
