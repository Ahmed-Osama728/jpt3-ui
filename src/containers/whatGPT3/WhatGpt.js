import React from 'react';
import './WhatGpt.css';
import { AiOutlineBorderTop } from 'react-icons/ai';

const WhatGpt = () => {
  return (
    <div className="wgpt">
      <div className="wgpt__content">
        <div className="wgpt__content-1">
          <div className="wgpt__content-1_logo">
            <hr />
            <h1>What is GPT-3?</h1>
          </div>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="wgpt__content-2">
          <h2 className="gradient__text">
            The possibilities are beyond your imagination
          </h2>
          <a>Explore The Library</a>
        </div>
        <div className="wgpt__content-3">
          <div className="wgpt__content-3_chatbots">
            <div className="wgpt__content-3_chatbots-logo">
              <hr />
              <h1>Chatbots</h1>
            </div>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.{' '}
            </p>
          </div>
          <div className="wgpt__content-3_knowledge">
            <div className="wgpt__content-3_knowledge-logo">
              <hr />
              <h1>Knowledgebase</h1>
            </div>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div className="wgpt__content-3_edu">
            <div className="wgpt__content-3_edu-logo">
              <hr />
              <h1>Education</h1>
            </div>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGpt;
