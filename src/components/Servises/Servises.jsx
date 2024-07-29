import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

import servisesData from './servisesData.json';
import css from './Servises.module.css';
import arrow from '../../images/icons/arrowRight.svg';

const Servises = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % servisesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + servisesData.length) % servisesData.length
    );
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
              {isMobile ? (
                <li key={nanoid()} className={css.subTitleItem}>
                  {currentService.title}
                </li>
              ) : (
                servisesData.map((servis, index) => (
                  <li
                    key={nanoid()}
                    className={`${css.subTitleItem} ${
                      index === currentIndex ? css.active : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {servis.title}
                  </li>
                ))
              )}
            </ul>
            {isMobile && (
              <div className={css.botton}>
                <img
                  className={css.bottnPrev}
                  src={arrow}
                  alt="arrow"
                  onClick={handlePrev}
                />
                <img
                  className={css.bottonNext}
                  src={arrow}
                  alt="arrow"
                  onClick={handleNext}
                />
              </div>
            )}
          </div>
          <div className={css.progressbar}>
            <div
              className={css.progressbarStatus}
              style={{
                width: `${((currentIndex + 1) / servisesData.length) * 100}%`,
              }}
            ></div>
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
