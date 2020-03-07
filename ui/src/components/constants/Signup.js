import React, {Component} from 'react';

//@ MODULES
import {Button, Modal, Header, Form, Divider} from 'semantic-ui-react';
import DatePicker from 'react-semantic-ui-datepickers';

//@ UTIL
import api from '../api/user';
import moment from 'moment';

/**
 * @Developer - Justine Paul B. Guiao
 * @UpdatedDate - March 5, 2020
 * @description - Sign up modal component for user registration 
*/

class Signup extends Component {
  constructor(props){
  super(props)
  this.state = {
    isRegisterOpened: false,
    userName: '',
    password: '',
    verifiedPassword: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sex: '',
    birthDate: new Date(),

    contactNumber: '',
    address: '',
    isFormLoading: false,
  }
	
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
  
  show = dimmer => () => this.setState({ dimmer, isRegisterOpened: true })
  close = () => this.setState({ isRegisterOpened: false })

  handleSignup = async () =>{
    const {email, password, verifiedPassword, firstName, middleName, lastName, birthDate, sex, contactNumber, address} = this.state;
    const personalInformation = {firstName, middleName, lastName, birthDate, sex, contactNumber, address};

    await api.register(email, password, verifiedPassword, personalInformation, this.setState.bind(this));
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDateChange = (event, data) => {
    this.setState({ birthDate: data.value });
  }
  
  render() {
    const { isRegisterOpened, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show()} color="blue" inverted>No account yet? Click here to register</Button>

        <Modal dimmer={dimmer} open={isRegisterOpened} onClose={this.close}>
          <Modal.Header>Create User</Modal.Header>
          <Modal.Content>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    id="form-input-control-error-email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email"
                    type="text"
                    fluid label="Email"
                    placeholder="Email"
                    error={{
                      content: "Please enter a valid email address",
                      pointing: "above"
                    }}
                    />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input onChange={this.handleChange} value={this.state.password} name="password" type="password" fluid label="Password" placeholder=""></Form.Input>
                  <Form.Input onChange={this.handleChange} value={this.state.verifiedPassword} name="verifiedPassword" type="password" fluid label="Enter password again" placeholder=""></Form.Input>
                </Form.Group>

                <Divider></Divider>

                <Header>Personal Information</Header>
                <Form.Group widths="equal">
                  <Form.Input onChange={this.handleChange} value={this.state.firstName} name="firstName" type="text" fluid label="First Name" placeholder="First Name"></Form.Input>
                  <Form.Input onChange={this.handleChange} value={this.state.middleName} name="middleName" type="text" fluid label="Middle Name" placeholder="Middle Name"></Form.Input>
                  <Form.Input onChange={this.handleChange} value={this.state.lastName} name="lastName" type="text" fluid label="Last Name" placeholder="Last Name"></Form.Input>
                </Form.Group>

                <Form.Group>
                  <DatePicker label="Birthdate" name="birthDate" value={this.state.birthDate} fluid onChange={this.handleDateChange}/>
                  <Form.Input onChange={this.handleChange} value={this.state.sex} name="sex" type="text" label="Sex" placeholder="Sex" />
                </Form.Group>

                <Divider></Divider>

                <Form.Group widths="equal">
                  <Form.Input onChange={this.handleChange} value={this.state.contactNumber} name="contactNumber" type="text" fluid label="Contact Number" placeholder="Contact Number"></Form.Input>
                </Form.Group>

                <Form.Input onChange={this.handleChange} value={this.state.address} name="address" type="text" fluid label="Address" placeholder="Address"></Form.Input>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.close}negative>Cancel</Button>
              <Button onClick={this.handleSignup} positive>Confirm</Button>
            </Modal.Actions>
          </Modal>
      </div>
    )
  }
}

export default Signup;