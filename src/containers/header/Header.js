import React from 'react';
import './Header.css';

import people from '../../assests/people.png';
import ai from '../../assests/ai.png';
const Header = () => {
  return (
    <div className="header section__padding id='home">
      <div className="header__content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
