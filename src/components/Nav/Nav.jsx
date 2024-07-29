import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Nav.module.css';
import logo from '../../images/icons/Logo.svg';
import burger from '../../images/icons/burger.svg';
import Modal from 'components/Modal/Modal';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

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
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? css.active : '')}
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigationItem}>
              <NavLink
                to="/about#about"
                className={({ isActive }) => (isActive ? css.active : '')}
                onClick={e => handleScroll(e, 'about')}
              >
                About
              </NavLink>
            </li>
            <li className={css.navigationItem}>
              <NavLink
                to="/services#services"
                className={({ isActive }) => (isActive ? css.active : '')}
                onClick={e => handleScroll(e, 'services')}
              >
                Services
              </NavLink>
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
