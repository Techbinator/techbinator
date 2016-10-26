import React from 'react';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';
import {withRouter} from 'react-router';

/* Common Components */

import Sidebar from '../common/sidebar';
import Header from '../common/header';
import Footer from '../common/footer';

@withRouter
export default class AppContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
  }

  getMeteorData(){
    return { is_Authenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if(!this.state.is_Authenticated ){
      this.props.router.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(!this.state.is_Authenticated){
      this.props.router.push('/login');
    }
  }

  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header/>
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}
