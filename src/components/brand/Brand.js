import React from 'react';
import './Brand.css';

import google from '../../assests/google.png';
import slack from '../../assests/slack.png';
import atlassian from '../../assests/atlassian.png';
import dropbox from '../../assests/dropbox.png';

const Brand = () => {
  return (
    <div className="brands">
      <div className="brands__companies">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brand;
