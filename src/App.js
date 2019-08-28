import React from 'react';
import HomePage from './pages/Home/Home'
import ShopPage from './pages/Shop/Shop'
import SignInOut from './pages/SignInOut/SignInOut'
import Header from './components/Header/Header'

import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import { setCurrentUser} from './redux/user/user-actions'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if there is an actual e.g. google account
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //similar to onauthstatechanged we check if snapshot's changed chances are it wont happen
        //wont happen because we are not going update the user ever in our code
        //but runs the first time it happens: An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document.
        //but pro is that we will still be sent a snapshot object 
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin/' component={SignInOut} />
        </Switch>
      </div>
    );
  }

}

//dispatch is a way for redux to know that whatever object u are passing in is going to be an action object that gets passed to every reducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//in component itself only sets state and doesnt do anything with the state in the component itself/
//doesnt need any of the state as its props, hence null
export default connect(null, mapDispatchToProps)(App);
