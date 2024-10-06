import React from 'react';

import loginSectionStyles from './loginSection.module.scss';

function renderLoginSection(props) {
  return (
    <section className={loginSectionStyles.loginSection}>
      /*🚩9 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={loginSectionStyles.color} />
      <div className={loginSectionStyles.color3} />
      <p className={loginSectionStyles.highlight}>Login</p>
      <img
        className={loginSectionStyles.decorator2}
        src={'/assets/3f508e8493cbf84ff95897d1387e0fe0.png'}
        alt="alt text"
      />
      <img className={loginSectionStyles.color24} src={'/assets/49ff174c2dfc1039e0ea35593a0a5aef.png'} alt="alt text" />
      <p className={loginSectionStyles.highlight1}>Host</p>
      <img className={loginSectionStyles.image44} src={'/assets/63b8696bfb54a46aa48dfb549f6d36ef.svg'} alt="alt text" />
      <h1 className={loginSectionStyles.title2}>careersync</h1>
      <img className={loginSectionStyles.image60} src={'/assets/fbbd491eead1a3ea5439dfa9f8db7abf.png'} alt="alt text" />
    </section>
  );
}

export default renderLoginSection;
