import React from 'react';

import Button from '@/components/Button';

import './AcceptCookie.scss';

const AcceptCookie = () => {
  return (
    <div className="AcceptCookie">
      <div className="AcceptCookie-wrapper flex items-center justify-between">
        <div className="AcceptCookie-wrapper-item">
          <div className="AcceptCookie-title">Cookies Policy</div>
          <div className="AcceptCookie-description">
            MGC is using cookies to provide better service for every user. By using ou site you agree to the use of
            cookies. Kindly check Privacy Policy and Terms of Services.
          </div>
        </div>
        <div className="AcceptCookie-wrapper-item">
          <Button title="Accept" />
        </div>
      </div>
    </div>
  );
};

export default AcceptCookie;
