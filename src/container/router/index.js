import React from 'react';
import HomePageLayout from '../layout/home-page-layout/index';
import photoPageLayout from '../layout/photo-page-layout';
import RollingPageLayout from '../layout/rolling-page-layout';
import { Route } from 'react-router-dom';
const RouterList = () => (
  <div>
    <Route exact path="/" component={ HomePageLayout } />
    <Route path="/two" component={ photoPageLayout } />
    <Route path="/rolling" component={ RollingPageLayout } />
  </div>
)
export default RouterList;