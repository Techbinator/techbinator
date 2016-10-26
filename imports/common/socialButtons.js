import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {
  Icon,
  Button
} from '@sketchpixy/rubix';

@withRouter
export class FacebookLoginBtn extends Component {

  loginWithFacebook(e){
      e.preventDefault();
      Meteor.loginWithFacebook({
        requestPermissions: ['user_friends', 'public_profile', 'email']
      }, (err) => {
          if (err) {
            this.props.setError(err.reason);
          } else {
            this.props.router.push('/');
          }
      })
  }

  render(){
    if( this.props.buttonType == 'register'){
      return(
        <Button block type='submit' onClick={::this.loginWithFacebook} id='facebook-btn' lg bsStyle='darkblue'>
          <Icon glyph='icon-fontello-facebook' />
          <span>Facebook</span>
        </Button>
      );
    } else if( this.props.buttonType == 'login') {
      return(
        <Button id='facebook-btn' lg bsStyle='darkblue' type='submit' onClick={::this.loginWithFacebook}>
          <Icon glyph='icon-fontello-facebook' />
          <span>Sign in <span className='hidden-xs'>with facebook</span></span>
        </Button>
      );
    }

  }
}

@withRouter
export class TwitterLoginBtn extends Component {

  loginWithTwitter(e){
    e.preventDefault();
      Meteor.loginWithTwitter({}, (err) => {
          if (err) {
            this.props.setError(err.reason);
          } else {
            this.props.router.push('/');
          }
      })
  }

  render(){
    if( this.props.buttonType == 'register'){
      return(
        <Button block type='submit' id='twitter-btn' onClick={::this.loginWithTwitter} lg bsStyle='darkblue' href="#">
          <Icon glyph='icon-fontello-twitter' />
          <span>Twitter</span>
        </Button>
      );
    } else if( this.props.buttonType == 'login') {
      return(
        <a id='twitter-link' href='#' onClick={::this.loginWithTwitter}>
          <Icon glyph='icon-fontello-twitter' /><span> or with twitter</span>
        </a>
      );
    }

  }
}
