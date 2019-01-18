import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from './store/actions/index';

import Aux from '../src/hoc Higher-Order Components/Aux';
import Auth from '../src/containers/Auth/Auth';
import Logout from '../src/containers/Auth/Logout/Logout';
import factorePage from '../src/services/FactoryPage';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    let Layout;
    if (this.props.isAuthenticated) {
      Layout = ( factorePage(this.props.theTypeUserIs) );
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Auth} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout >
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    theTypeUserIs: state.auth.typeUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSingnup: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
