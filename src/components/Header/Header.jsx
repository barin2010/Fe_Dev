import React from 'react';
import css from './Header.module.css';
import arrow from '../../images/icons/Arrow.svg';

const Header = () => {
  return (
    <section className={css.header}>
      <div className={css.wrapper}>
        <div className={css.border}>
          <p className={css.borderText}>Integrity Innovation Dedication</p>
        </div>

        <div className="container">
          <div className={css.headerListWrapper}>
            <ul className={css.headerList}>
              <li className={`${css.headerItem} ${css.frame1}`}>
                <p className={css.itemText}>Highways & Roads</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
              <li className={`${css.headerItem} ${css.frame2}`}>
                <p className={css.itemText}>Transportation Planning</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
              <li className={`${css.headerItem} ${css.frame3}`}>
                <p className={css.itemText}>Design Build Services</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
              <li className={`${css.headerItem} ${css.frame4}`}>
                <p className={css.itemText}>Water</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
              <li className={`${css.headerItem} ${css.frame5}`}>
                <p className={css.itemText}>Bridges</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
              <li className={`${css.headerItem} ${css.frame6}`}>
                <p className={css.itemText}>Construction Services</p>
                <a className={css.itemLink} href="#!">
                  <img className={css.itemImg} src={arrow} alt="arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
