import React from 'react';

import Logo from '@/assets/images/logo.svg';
import ImageFooterIconsList from '@/assets/images/image-footer-icons-list.svg';
import ImageFooterIconsListMb from '@/assets/images/image-footer-icons-list-mb.svg';

import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <div className="Footer-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Footer-description">
            MGC is a community-based crypto casino that offers their players the best online casino experience possible!
            At MGC, we are convinced that blockchain will change the online crypto gambling industry forever! Jump in
            and check it out for yourself! Have fun and earn crypto!
          </div>

          <div className="Footer-main flex flex-wrap">
            <div className="Footer-main-item">
              <div className="Footer-title">JOIN US</div>

              <Link to={Paths.Home} className="Footer-link">
                HELP CENTER
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                USER AGREEMENT
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                DEPOSIT BONUS TERMS
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                PRIVACY POLICY
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                APP
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                FORUM
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                GAMBLE AWARE
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                NEWS
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                OFFICIAL MIRRORS
              </Link>
              <Link to={Paths.Home} className="Footer-link">
                AML
              </Link>
            </div>
            <div className="Footer-main-item">
              <div className="Footer-title">ACCEPTED CURRENCIES</div>
              <div className="Footer-icons-list">
                <img className="desktop" src={ImageFooterIconsList} alt="" />
                <img className="mobile" src={ImageFooterIconsListMb} alt="" />
              </div>
            </div>

            <div className="Footer-main-item">
              <div className="Footer-title">CONTACT US</div>
              <div className="Footer-text">
                Help:
                <a className="Footer-link" href="#">
                  <strong>Help.mgc.game</strong>
                </a>
              </div>

              <div className="Footer-text">
                Business:
                <a className="Footer-link" href="#">
                  <strong>Business@mgc.game</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
