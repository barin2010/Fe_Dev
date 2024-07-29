import React from 'react';
import css from './Footer.module.css';
import logoMob from '../../images/icons/logoWhiteMobile.svg';
import facebookMob from '../../images/icons/facebookMob.svg';
import linkedInMob from '../../images/icons/LinkedINMob.svg';
import youtubeMob from '../../images/icons/Youtube_blackMob.svg';
import instaMob from '../../images/icons/Instagram_blackMob.svg';
import twitter from '../../images/icons/TwitterMob.svg';
import ContactForm from 'components/ContactForm/ContactForm';
import facebookDesc from '../../images/icons/facebookDesc.svg';
import linkedInDesc from '../../images/icons/LinkedINDesc.svg';
import youtubeDesc from '../../images/icons/Youtube_blackDesc.svg';
import instaDesc from '../../images/icons/Instagram_blackDesc.svg';
import twitterDesc from '../../images/icons/TwitterDesc.svg';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.footerLogo}>
          <img src={logoMob} alt="logo" />
        </div>
        <ul className={css.footerSocial}>
          <li className={css.footerSocialItem}>
            <picture>
              <source src={facebookDesc} media="(min-width:768px)" />
              <img src={facebookMob} alt="facebook" />
            </picture>
          </li>
          <li className={css.footerSocialItem}>
            <picture>
              <source src={linkedInDesc} media="(min-width:768px)" />

              <img src={linkedInMob} alt="linkedIn" />
            </picture>
          </li>
          <li className={css.footerSocialItem}>
            <picture>
              <source src={youtubeDesc} media="(min-width:768px)" />
              <img src={youtubeMob} alt="youtube" />
            </picture>
          </li>
          <li className={css.footerSocialItem}>
            <picture>
              <source src={instaDesc} media="(min-width:768px)" />
              <img src={instaMob} alt="instagramm" />
            </picture>
          </li>
          <li className={css.footerSocialItem}>
            <picture>
              <source src={twitterDesc} media="(min-width:768px)" />
              <img src={twitter} alt="twitter" />
            </picture>
          </li>
        </ul>
        <div className={css.contactForm}>
          <p className={css.contactFormTitle}>Contact Us</p>
          <ContactForm />
        </div>

        <div className={css.footerAbout}>
          <p className={css.aboutTitle}>About</p>
          <ul className={css.aboutList}>
            <li className={css.aboutItem}>Awards</li>
            <li className={css.aboutItem}>Certifications</li>
            <li className={css.aboutItem}>OTHON International</li>
          </ul>
        </div>
        <div className={`${css.footerAbout} ${css.footerServisec}`}>
          <p className={css.aboutTitle}>Services</p>
          <ul className={css.aboutList}>
            <li className={css.aboutItem}>Transportation</li>
            <li className={css.aboutItem}>Structural</li>
            <li className={css.aboutItem}>Public Works</li>
            <li className={css.aboutItem}>Site Development</li>
            <li className={css.aboutItem}>Construction Management</li>
          </ul>
        </div>
        <div className={`${css.footerAbout} ${css.footerCompany}`}>
          <p className={css.aboutTitle}>Company</p>
          <ul className={css.aboutList}>
            <li className={css.aboutItem}>News</li>
            <li className={css.aboutItem}>Careers</li>
            <li className={css.aboutItem}>Contact</li>
          </ul>
        </div>

        <div className={`${css.foooterHuston} ${css.huston}`}>
          <p className={css.hustonTitle}>
            Houston <br />
            <span>(Headquarters)</span>
          </p>
          <p className={css.footerAdress}>
            575 N. Dairy Ashford Rd., Suite 650 Houston, TX 77079
          </p>
          <p className={css.footerParallele}>P: 713.975.8555</p>
        </div>
        <div className={`${css.foooterHuston} ${css.dallas}`}>
          <p className={css.hustonTitle}>Dallas</p>

          <p className={css.footerAdress}>
            2140 Lake Park Blvd.,Suite 200 Richardson, TX 75080
          </p>
          <p className={css.footerParallele}>P: 214.340.7344</p>
        </div>
        <div className={`${css.foooterHuston} ${css.austin}`}>
          <p className={css.hustonTitle}>Austin</p>

          <p className={css.footerAdress}>
            9442 Capital of Texas Highway North Plaza 1, Suite 500 Austin, TX
            78759
          </p>
          <p className={css.footerParallele}>P: 512.940.8602</p>
        </div>
        <div className={css.footerOfises}>
          <p className={css.ofisesTitle}>International Offices</p>
          <p className={css.ofisesTextOne}>
            <span>Sangineni Engineering and Technical Services (SEATS) –</span>
            Hyderabad, India
          </p>
          <p className={css.ofisesTextTwo}>
            <span>Othon Enginero Consultares –</span>Santander, Spain
          </p>
        </div>
        <div className={css.footerSertification}>
          Certifications
          <div className={css.sertificateRow}>
            <ul className={css.sertificationTitle}>
              <p className={css.sertificateList}>DBE:</p>
              <li className={css.sertificationItem}>Texas</li>
              <li className={css.sertificationItem}>Georgia</li>
              <li className={css.sertificationItem}>California</li>
              <li className={css.sertificationItem}>Colorado</li>
              <li className={css.sertificationItem}>Florida</li>
              <li className={css.sertificationItem}>New Mexico</li>
              <li className={css.sertificationItem}>Virginia</li>
            </ul>
            <div className={css.sertificationTitle}>
              <p className={css.sertificateList}>SBE/MBE/HUB:</p>
              <p className={css.sertificationItem}>Texas</p>
            </div>
          </div>
        </div>
        <ul className={css.footerPrivacy}>
          <li className={css.privacyItem}>Terms and Conditions</li>
          <li className={css.privacyItem}>Privacy Policy</li>
          <li className={css.privcyItemDesc}>
            <span>Created with ♡ by</span> DD.NYC®
          </li>
          <li className={css.privacyItem}>
            ©2024 OTHON, INC. All Rights Reserved.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
