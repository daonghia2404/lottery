import React, { useState } from 'react';
import { Link, navigate, useLocation } from '@reach/router';
import classNames from 'classnames';

import Logo from '@/assets/images/logo.svg';
import LogoMobile from '@/assets/images/favicon.svg';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import WalletModal from '@/containers/WalletModal';
import DropdownCustom from '@/components/DropdownCustom';
import AirDropModal from '@/containers/AirDropModal';
import { Paths } from '@/pages/routers';

import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();

  const [visibleWalletModal, setVisibleWalletModal] = useState(false);
  const [visibleAirDropModal, setVisibleAirDropModal] = useState(false);
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleOpenMenuMobile = () => {
    setVisibleMenuMobile(true);
  };

  const handleCloseMenuMobile = () => {
    setVisibleMenuMobile(false);
  };

  const handleOpenWalletModal = () => {
    handleCloseMenuMobile();
    setVisibleWalletModal(true);
  };

  const handleCloseWalletModal = () => {
    setVisibleWalletModal(false);
  };

  const handleOpenAirDropModal = () => {
    handleCloseMenuMobile();
    setVisibleAirDropModal(true);
  };

  const handleCloseAirDropModal = () => {
    setVisibleAirDropModal(false);
  };

  const handleNavigateLink = (link) => {
    navigate(link);
    handleCloseMenuMobile();
  };

  const dataMenu = [
    { link: Paths.Home, title: 'Home', icon: EIconName.Home, onClick: () => handleNavigateLink(Paths.Home) },
    {
      link: Paths.Lottery,
      title: 'Lottery',
      icon: EIconName.Lottery,
      onClick: () => handleNavigateLink(Paths.Lottery),
    },
    {
      link: Paths.DailyLottery,
      title: 'Daily Lottery',
      icon: EIconName.DailyLottery,
      onClick: () => handleNavigateLink(Paths.DailyLottery),
    },
    { link: ' ', title: 'MGC Token', icon: EIconName.MgcToken },
    { title: 'Air Drop', icon: EIconName.AirDrop, onClick: handleOpenAirDropModal },
  ];

  const dataMenuDropdown = [
    { iconName: EIconName.Wallet, iconColor: EIconColor.NOBEL, title: 'Wallet', onClick: handleOpenWalletModal },
    {
      iconName: EIconName.Referral,
      iconColor: EIconColor.NOBEL,
      title: 'Referral',
      onClick: () => handleNavigateLink(Paths.Referral),
    },
    { iconName: EIconName.Logout, iconColor: EIconColor.NOBEL, title: 'Disconnect' },
  ];

  return (
    <div className="Header">
      <div
        className={classNames('Header-list-overlay', { active: visibleMenuMobile })}
        onClick={handleCloseMenuMobile}
      />

      <div className="Header-wrapper flex items-center justify-between">
        <div className="Header-wrapper-item flex items-center">
          <div className="Header-logo">
            <Link to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
          </div>

          <div className="Header-logo-mobile">
            <Link to={Paths.Home}>
              <img src={LogoMobile} alt="" />
            </Link>
          </div>

          <div className="Header-btn-menu" onClick={visibleMenuMobile ? handleCloseMenuMobile : handleOpenMenuMobile}>
            <Icon name={EIconName.Menu} color={EIconColor.WHITE} />
          </div>
        </div>

        <div className="Header-wrapper-item flex items-center">
          <div className={classNames('Header-list flex items-center', { active: visibleMenuMobile })}>
            <div className="Header-list-close" onClick={handleCloseMenuMobile}>
              <Icon name={EIconName.Close} />
            </div>
            {dataMenu.map((item, index) => (
              <div
                key={index}
                className={classNames('Header-list-item flex items-center', { active: pathname.includes(item.link) })}
                onClick={item.onClick}
              >
                <div className="Header-list-item-icon">
                  <Icon name={item.icon} />
                </div>
                <div className="Header-list-item-title">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="Header-list-item btn">
            {isLogged ? (
              <DropdownCustom menu={dataMenuDropdown}>
                <Button
                  className="electric-violet"
                  title="x190a323da..."
                  iconName={EIconName.Wallet}
                  iconColor={EIconColor.WHITE}
                />
              </DropdownCustom>
            ) : (
              <Button title="CONNECT WALLET" onClick={() => setIsLogged(true)} />
            )}
          </div>
        </div>
      </div>

      <WalletModal visible={visibleWalletModal} onClose={handleCloseWalletModal} />

      <AirDropModal visible={visibleAirDropModal} onClose={handleCloseAirDropModal} />
    </div>
  );
};

export default Header;
