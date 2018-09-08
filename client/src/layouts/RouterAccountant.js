import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../componets/Header'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'
import ProductsPage from '../pages/ProductsPage'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <Header />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={HomePage} />
        <Route path={`${match.path}/users`} component={UsersPage} />
        <Route path={`${match.path}/products`} component={ProductsPage} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout