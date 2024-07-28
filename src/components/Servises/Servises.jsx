import React from 'react';
import css from './Servises.module.css';
import arrow from '../../images/icons/arrowRight.svg';

const Servises = () => {
  return (
    <section className="container">
      <div className={css.wrapper}>
        <div className={css.title}>Services</div>
        <div className={css.grid}>
          <div className={css.subTitle}>
            <ul className={css.subTitleList}>
              <li className={css.subTitleItem}>Highway and Road Engineering</li>
              <li className={css.subTitleItem}>Transportation Planning</li>
              <li className={css.subTitleItem}>Traffic Engineering</li>
              <li className={css.subTitleItem}>Bridges & Structural</li>
              <li className={css.subTitleItem}>Construction Services</li>
              <li className={css.subTitleItem}>
                Intelligent Transportation Systems Design
              </li>
              <li className={css.subTitleItem}>Illumination</li>
              <li className={css.subTitleItem}>Public Involvement</li>
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
                <li className={css.cardItem}>
                  Our mission is to accomplish great things, exceed our clients’
                  expectations and meet the challenges of our growing
                  infrastructure through practical engineering solutions,
                  innovation, and hard work.
                </li>
                <li className={css.cardItem}>
                  Our diverse group of Professional Engineers and Designers lead
                  the way by providing a full range of  services in roads and
                  highways: hands-on design management of roadway design,
                  traffic control plans, schematic design, minor and major
                  bridge design, traffic engineering studies, traffic demand
                  modeling, intelligent transportation systems, signing and
                  pavement markings, roadway hydraulics, from minor crossings
                  through major highways and interchanges across the state,
                  including the reconstruction of the $1.5 billion US 290
                  corridor.
                </li>
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
