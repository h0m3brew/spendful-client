import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import LandingPage from '../routes/LandingPage';
import LoginPage from '../routes/LoginPage'; 
import IncomePage from '../routes/IncomePage';
import ExpensesPage from '../routes/ExpensesPage';
import DashboardPage from '../routes/DashboardPage';
import AddItemPage from '../routes/AddItemPage';
//import PrivateRoute from '../routes/PrivateRoute';
import PublicOnlyRoute from '../routes/PublicOnlyRoute'
import PrivateRoute from '../routes/PrivateRoute'
import NotFoundPage from '../routes/NotFoundPage'
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      location: '/',
    }

    this.props.history.listen((location, action) => {
      // logout route render function doesnt logout properly
      // so i put it right here
      location = location.pathname.substr(1);

      if(location === '/') {
        this.context.processLogout();
      }

      this.setState({menuVisible: false, location});
    });
  }

  render() {
    return <>
      <Navbar menuVisible={this.state.menuVisible} location={this.state.location} />

      <div id="app-container">
        <Switch>
          <PublicOnlyRoute exact path={'/'} component={LandingPage} />
          <PublicOnlyRoute path={'/login'} component={LoginPage} />
          <PrivateRoute path={'/incomes'} component={IncomePage} />
          <PrivateRoute path={'/expenses'} component={ExpensesPage} />
          <PrivateRoute path={'/dashboard'} component={DashboardPage} />
          <PrivateRoute path={'/add'} component={AddItemPage} />
          {/* <Route path={'/logout'} render={() => <Redirect to="/" />} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>;
  }
}

export default withRouter(App);
