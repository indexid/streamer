import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // initializing the library.
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // The function "client.init" executes an async operation request over Google's API server in order to initialize a client.
      // Passing an object (clientId & scope) inside the init method, to get of user's profile.
      window.gapi.client
        .init({
          clientId:
            '220590046773-j1jk0i9qghs90e2rb57t1i5om7p02i1n.apps.googleusercontent.com',
          scope: 'email',
        })
        // init returns a promise.
        .then(() => {
          // Getting a reference to the auth object and saving the reference to it on component class.
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.onAuthChange checks an initialization if a user is singed in or not.
          this.onAuthChange(this.auth.isSignedIn.get());
          // This method "listen" when a status of login is going to change.
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Changing a signed status in our store.
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  // Handling the click event when a user changes his authentication.
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui green google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
