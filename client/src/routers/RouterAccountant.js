import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../componets/Header'
import HomePage from '../pages/HomePage'
import AccountantPage from '../pages/AccountantPage'

const AccountantLayout = ({ match }) => (
  <div className="primary-layout">
    <Header />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={HomePage} />
        <Route path={`${match.path}/accountant`} component={AccountantPage} />>
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default AccountantLayout