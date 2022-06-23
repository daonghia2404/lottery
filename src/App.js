import React from 'react';
import { Redirect, Router } from '@reach/router';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Router primary={false}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <PublicRoute path={Paths.Invite} component={Pages.Invite} />
            <PublicRoute path={Paths.Referral} component={Pages.Referral} />
            <PublicRoute path={Paths.DailyLottery} component={Pages.DailyLottery} />
            <PublicRoute path={Paths.Lottery} component={Pages.Lottery} />
            <PublicRoute path={Paths.Dashboard} component={Pages.Dashboard} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
          </Guest>
        </Router>
      </ParallaxProvider>
    </div>
  );
};

export default App;
