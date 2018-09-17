import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../componets/Header'
import HomePage from '../pages/DoctorPage'
import DoctorPage from '../pages/DoctorPage'

const AccountantLayout = ({ match }) => (
  <div className="primary-layout">
    <Header />
    <main>
      <Switch>
        <Route path={`${match.path}/doctor-page`} exact component={DoctorPage} />>
        <Route path={`${match.path}`} component={HomePage} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default AccountantLayout