import React from 'react';
import css from './Nav.module.css';
import logo from '../../images/icons/Logo.svg';
import burger from '../../images/icons/burger.svg';

const Nav = () => {
  return (
    <section className={css.navigation}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={css.navigationList}>
            <li className={css.navigationItem}>
              <a href="#!">Home</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#!">About</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#!">Services</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#!">Careers</a>
            </li>
          </ul>
          <a className={css.button} href="#!">
            Contact Us
          </a>
          <div className={css.burger}>
            <img src={burger} alt="menu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
