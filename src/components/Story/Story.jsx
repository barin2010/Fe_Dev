import React from 'react';
import css from './Story.module.css';
import world from '../../images/icons/world.svg';
import arrow from '../../images/icons/arrowRightOrange.svg';
import storyMob1 from '../../images/story/storyMobile1.jpg';
import storyMob1_2x from '../../images/story/storyMobile1@2x.jpg';
import storyMob2 from '../../images/story/storyMobile2.jpg';
import storyMob2_2x from '../../images/story/storyMobile2@2x.jpg';
import storyDesc1 from '../../images/story/storyDesc1.jpg';
import storyDesc1_2x from '../../images/story/storyDesc1@2x.jpg';
import storyDesc2 from '../../images/story/storyDesc2.jpg';
import storyDesc_2x from '../../images/story/storyDesc2@2x.jpg';

const Story = () => {
  return (
    <section className={css.story}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.gridTop}>
            <div className={css.storyTitle}>
              <p>Our Story (history and legacy):</p>
            </div>
            <div className={css.storyDescr}>
              <p>
                OTHON is recognized as a multi-discipline civil engineering
                firm. It was incorporated in 1996 in Houston, Texas, by the late
                F. William Othon, P.E. 
              </p>
            </div>
            <div className={css.storyToday}>
              <img className={css.ctoryTodayImg} src={world} alt="world" />
              <p className={css.storyTodayTitle}>
                Today OTHON is an award-winning company with over 100 employees.
              </p>
              <p className={css.storyTodayDescr}>
                Our diverse group of Professional Engineers, designers and team
                members lead the way by providing a full range of design
                services in roads and highways, bridges and structural
                engineering, transportation planning, traffic engineering, high
                speed rail systems, pumping and drainage networks, airports,
                municipal infrastructure, intelligent transportation systems,
                construction services, public involvement and program management
                services for all levels of government agencies as well as
                private developers.
              </p>
            </div>
            <div className={css.otonImg}>
              <picture>
                <source
                  className={css.storyCompanyImg}
                  srcSet={`${storyDesc1} 1x, ${storyDesc1_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  className={css.storyCompanyImg}
                  src={storyMob1}
                  alt="img"
                  srcSet={`${storyMob1} 1x, ${storyMob1_2x} 2x`}
                />
              </picture>
            </div>

            <div className={css.storyOtonText}>
              In 1998, OTHON expanded its operations with the addition of an
              office in the Dallas, Texas region, and in 2023 opened a third
              office in Austin, Texas.
            </div>

            <div className={css.storyCompanyImgBox}>
              <picture>
                <source
                  className={css.storyCompanyImg}
                  srcSet={`${storyDesc2} 1x, ${storyDesc_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  className={css.storyCompanyImg}
                  src={storyMob2}
                  alt="img"
                  srcSet={`${storyMob2} 1x, ${storyMob2_2x} 2x`}
                />
              </picture>
            </div>
          </div>
          <div className={css.gridBottom}>
            <div className={css.storyCompany}>
              <p>
                Throughout the company’s progress, we have remained committed to
                our core values and vision. Making a difference in the lives of
                the people and communities we serve is paramount to our work. It
                is the why we work hard and smart to deliver the highest quality
                of services in the civil engineering industry.
              </p>
            </div>
            <div className={css.storyCard}>
              <p>About Us</p>
              <div className={css.storyCardBottom}>
                <p className={css.cardBottomText}>
                  History and competencies of the company.
                </p>
                <a href="#!" className={css.cardBottomBoxImg}>
                  <img className={css.cardBottomImg} src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
