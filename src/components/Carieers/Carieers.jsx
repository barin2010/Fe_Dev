import React from 'react';
import css from './Carieers.module.css';
import carieerMob from '../../images/carieers/carieerMob.jpg';
import carieerMob_2x from '../../images/carieers/carieerMob@2x.jpg';
import world from '../../images/icons/world.svg';
import arrow from '../../images/icons/Arrow 18.svg';

const Carieers = () => {
  return (
    <section className={css.carrieer}>
      <div className={css.wrapper}>
        <div className={css.carrieerTop}>
          <p className={css.carrieerTopTitle}>Careers</p>
          <p className={css.carieerTopDescr}>Our Offices</p>
        </div>
        <div className={css.grid}>
          <ul className={css.huston}>
            <li className={css.hustonItem}>
              Houston, TX <span>(Headquarters)</span>
            </li>
            <li className={css.hustonItem}>Dallas, TX</li>
            <li className={css.hustonItem}>Austin, TX</li>
          </ul>
          <div className={css.carieerImage}>
            <div className={css.carieerImageBox}>
              <img
                className={css.img}
                src={carieerMob}
                alt="people"
                srcSet={`${carieerMob} 1x, ${carieerMob_2x} 2x`}
              />
            </div>
            <div className={css.carieerImageWorld}>
              <img className={css.imageWorld} src={world} alt="world" />
              <p className={css.textWorld}>
                OTHON provides equal employment opportunities to all employees
                and applicants for employment and prohibits discrimination and
                harassment of any type without regard to race, color, religion,
                age, sex, national origin, disability status, genetics,
                protected veteran status, sexual orientation, gender identity or
                expression, or any other characteristic protected by federal,
                state or local laws.
              </p>
            </div>
          </div>
          <div className={css.carieerBottom}>
            <div className={css.carieerBottonBox}>
              <p className={css.bottonText}>List Job Openings</p>
              <img className={css.bottonImg} src={arrow} alt="arrow" />
            </div>
            <div className={css.carieerBottonBox}>
              <p className={css.bottonText}>Apply Now</p>
              <img className={css.bottonImg} src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carieers;
