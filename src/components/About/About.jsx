import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './About.module.css';

const About = () => {
  return (
    <section className={css.about} id="about">
      <div className="container">
        <div className={css.wrapper}>
          <ul className={css.grid}>
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                `${css.gridTitle} ${isActive ? css.active : ''}`
              }
            >
              About
            </NavLink>

            <li className={`${css.gridItem} ${css.item1}`}>
              <p className={css.aboutTitle}>Mission:</p>
              <p className={css.aboutDesc}>
                Deliver service and execution excellence when providing
                high-quality engineering solutions. Apply innovative, reliable
                and cost-effective solutions.
              </p>
            </li>
            <li className={`${css.gridItem} ${css.item2}`}>
              <p className={css.aboutTitle}>Vision:</p>
              <p className={css.aboutDesc}>
                Improve the quality of life in our communities, one project at a
                time. Develop strategic relationships with valued clients. Be a
                responsive and trusted partner of choice to our valued clients.
              </p>
            </li>
            <li className={`${css.gridItem} ${css.item3}`}>
              <p className={css.aboutTitle}>What We Do:</p>
              <p className={css.aboutDesc}>
                OTHON is a national DBE/MBE engineering firm providing
                professional civil engineering, construction management, and
                environmental services to governmental entities, private
                industry, and other engineering firms - regionally, nationally,
                and internationally.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
