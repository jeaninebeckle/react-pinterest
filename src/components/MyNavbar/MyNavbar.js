import React from 'react';
import firebase from 'firebase/app';
import Auth from '../Auth/Auth';
import 'firebase/auth';

class MyNavbar extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="#homePage"><i className="fab fa-pinterest fa-2x"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle nav">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div id="auth"></div>
      <div className="navbar-nav ml-auto">
      {
        authed ? (
          <button id="navbar-logout-button" type="button" className="navbar btn btn-outline-danger" onClick={this.logoutClickEvent}>Log Out</button>
        ) : (
          <Auth />
        )
      }
      </div>
    </div>
  </nav>
    );
  }
}

export default MyNavbar;
