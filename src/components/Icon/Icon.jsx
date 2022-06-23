import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import AirDrop from './AirDrop';
import AngleCircleLeft from './AngleCircleLeft';
import AngleCircleRight from './AngleCircleRight';
import BookMark from './BookMark';
import Close from './Close';
import Copy from './Copy';
import DailyLottery from './DailyLottery';
import Home from './Home';
import Lottery from './Lottery';
import MgaToken from './MgaToken';
import MgcToken from './MgcToken';
import Transcation from './Transcation';
import Wallet from './Wallet';
import Logout from './Logout';
import Referral from './Referral';
import Task from './Task';
import CirclePlus from './CirclePlus';
import Search from './Search';
import Menu from './Menu';
import AngleLeft from './AngleLeft';
import AngleLineLeft from './AngleLineLeft';
import AngleRight from './AngleRight';
import AngleLineRight from './AngleLineRight';
import Ticket from './Ticket';
import LotteryYellow from './LotteryYellow';
import Rank from './Rank';
import Speaker from './Speaker';
import Union from './Union';
import Check from './Check';
import User from './User';
import UserGreen from './UserGreen';
import UnionGreen from './UnionGreen';
import SpeakerGreen from './SpeakerGreen';
import Question from './Question';
import ArrowUp from './ArrowUp';
import AngleUp from './AngleUp';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.AirDrop:
        return <AirDrop color={color} />;
      case EIconName.AngleCircleLeft:
        return <AngleCircleLeft color={color} />;
      case EIconName.AngleCircleRight:
        return <AngleCircleRight color={color} />;
      case EIconName.BookMark:
        return <BookMark color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.Copy:
        return <Copy color={color} />;
      case EIconName.DailyLottery:
        return <DailyLottery color={color} />;
      case EIconName.Home:
        return <Home color={color} />;
      case EIconName.Lottery:
        return <Lottery color={color} />;
      case EIconName.MgaToken:
        return <MgaToken color={color} />;
      case EIconName.MgcToken:
        return <MgcToken color={color} />;
      case EIconName.Transcation:
        return <Transcation color={color} />;
      case EIconName.Wallet:
        return <Wallet color={color} />;
      case EIconName.Logout:
        return <Logout color={color} />;
      case EIconName.Referral:
        return <Referral color={color} />;
      case EIconName.Task:
        return <Task color={color} />;
      case EIconName.CirclePlus:
        return <CirclePlus color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.AngleLeft:
        return <AngleLeft color={color} />;
      case EIconName.AngleLineLeft:
        return <AngleLineLeft color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.AngleLineRight:
        return <AngleLineRight color={color} />;
      case EIconName.Ticket:
        return <Ticket color={color} />;
      case EIconName.LotteryYellow:
        return <LotteryYellow color={color} />;
      case EIconName.Rank:
        return <Rank color={color} />;
      case EIconName.Speaker:
        return <Speaker color={color} />;
      case EIconName.Union:
        return <Union color={color} />;
      case EIconName.Check:
        return <Check color={color} />;
      case EIconName.User:
        return <User color={color} />;
      case EIconName.UserGreen:
        return <UserGreen color={color} />;
      case EIconName.UnionGreen:
        return <UnionGreen color={color} />;
      case EIconName.SpeakerGreen:
        return <SpeakerGreen color={color} />;
      case EIconName.Question:
        return <Question color={color} />;
      case EIconName.ArrowUp:
        return <ArrowUp color={color} />;
      case EIconName.AngleUp:
        return <AngleUp color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
