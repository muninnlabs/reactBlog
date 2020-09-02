import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Publication from './pages/publication/publication.component';
import EditPublicationComponent from './pages/publication/edit-publication.component';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/publication/:id" component={Publication} />
      <Route path="/add_publication" component={EditPublicationComponent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
