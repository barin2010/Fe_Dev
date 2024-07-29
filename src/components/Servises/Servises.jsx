import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

import servisesData from './servisesData.json';
import css from './Servises.module.css';
import arrow from '../../images/icons/arrowRight.svg';

const Servises = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTitleClick = index => {
    setCurrentIndex(index);
  };

  const currentService = servisesData[currentIndex];

  return (
    <section className="container" id="services">
      <div className={css.wrapper}>
        <div className={css.title}>
          <NavLink to="/services" className={css.title}>
            Services
          </NavLink>
        </div>
        <div className={css.grid}>
          <div className={css.subTitle}>
            <ul className={css.subTitleList}>
              {servisesData.map((servis, index) => (
                <li
                  key={nanoid()}
                  className={`${css.subTitleItem} ${
                    index === currentIndex ? css.active : ''
                  }`}
                  onClick={() => handleTitleClick(index)}
                >
                  {servis.title}
                </li>
              ))}
            </ul>
            <div className={css.botton}>
              <img className={css.bottnPrev} src={arrow} alt="arrow" />
              <img className={css.bottonNext} src={arrow} alt="arrow" />
            </div>
          </div>
          <div className={css.progressbar}>
            <div className={css.progressbarStatus}></div>
          </div>
          <div className={css.servisesCard}>
            <div className={css.cardListWrapper}>
              <ul className={css.cardList}>
                {currentService.items.map(item => (
                  <li className={css.cardItem} key={nanoid()}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.cardBotton}>
              <a href="#!">
                <img className={css.cardBottonImg} src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servises;
