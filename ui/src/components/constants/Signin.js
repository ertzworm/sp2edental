import React, {Component} from 'react';

//@ MODULES
import {Form, Grid, Header, Message, Segment, Button, Loader} from 'semantic-ui-react';
import Signup from './Signup';

//@ UTILS
import api from "../api/user";
import {validateEmail} from "../util/validators";
import FormValidatorPopUp from "../util/components/form-validator-popup";

/**
 * @author Justine Paul B. Guiao 
 * @createdAt March 06, 2020
*/

class Signin extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      hasFormErrors: false,
      errorMessage: "",
      visible: false,
      isFormLoading: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;co

    if(this.isFormValid(email, password)) {
      await api.logIn(email, password, this.setState.bind(this))
    }
  }

  handleChange = (event) => {
    const { target } = event;
    const {value, name} = target

    this.setState({
      [name]: value
    });
  }

  isFormValid = (email, password) => {
    const {visible} = this.state;
    if(!(email.trim())) {
      this.setState({ hasFormErrors: true, errorMessage: "Please fill this out.", visible: !visible,});
      return false;
    }

    if(email && !(validateEmail(email))) {
      this.setState({ hasFormErrors: true, errorMessage: "Please enter a valid email.", visible: !visible });
      return false;
    }

    if(!password) {
      this.setState({ hasFormErrors: true, errorMessage: "Please fill out password.", visible: !visible});
      return false;
    }
    this.setState({ hasFormErrors: false, errorMessage: ""});
    return true;
  }

    render(){
      const {email, password, isFormLoading} = this.state;
      const {visible} = this.state;
      const {userToken} = this.state;
        
      return(
        <div className="login-form">
          {/* <style>{`
              body > div,
              body > div > div,
              body > div > div> div.login-form{
                  height: 100%
              }
          `}
          </style> */}

          <Grid textAlign="center" style={{height:'100%'}} verticalAlign="middle">
            <Grid.Column style={{ maxWidth:450 }}>
              <Header as="h2" color="teal" textAlign="center">
                  Welcome to eDental! {userToken}
              </Header>
    
              <Form size="large" onSubmit={this.handleFormSubmit}>
                <Segment stacked>
                  {this.state.hasFormErrors && <FormValidatorPopUp animation="jiggle" isValidatorActive={visible} pointing="below" message={this.state.errorMessage}></FormValidatorPopUp>}
                  <Form.Input onChange={this.handleChange} value={email} name="email" fluid icon="user" iconPosition="left" placeholder="Email"/>
                  <Form.Input onChange={this.handleChange} value={password} name="password" fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />
                  <Button type="submit" color="blue">{isFormLoading? <Loader inline active size="mini" />: "Sign in"}</Button>
                </Segment>
              </Form>

                <Message>
                  <Signup></Signup>
                </Message>
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Signin;