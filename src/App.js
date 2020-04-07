import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null
  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => 
      this.setState({currentUser: user})
    )
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
