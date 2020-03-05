import React, {Component} from 'react';

//@ MODULES
import {Form, Grid, Header, Message, Segment, Button, Label} from 'semantic-ui-react';
import Signup from './Signup';

//@ UTILS
import api from "../api";
import {validateEmail} from "../util/validators";

class Signin extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            hasFormErrors: false,
            errorMessage: "",
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleLogin = async () => {
        const { email, password } = this.state;

        if(this.isFormValid(email, password)) {
            let result = await api.logIn(email, password, this.setState.bind(this))
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
        if(!(email.trim())) {
            this.setState({ hasFormErrors: true, errorMessage: "Please fill this out." });
            return false;
        }

        if(email && !(validateEmail(email))) {
            this.setState({ hasFormErrors: true, errorMessage: "Please enter a valid email." });
            return false;
        }

        if(!password) {
            this.setState({ hasFormErrors: true, errorMessage: "Please fill out password."});
            return false;
        }

        this.setState({ hasFormErrors: false, errorMessage: ""});
        return true;

    }

    render(){
        const {email, password} = this.state;
        const {userToken} = this.state;
        
        return(
            <div className="login-form">
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div> div.login-form{
                        height: 100%
                    }
                `}
                </style>

                <Grid textAlign="center" style={{height:'100%'}} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth:450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                           Welcome to eDental! {userToken}
                        </Header>
			
                        <Form size="large">
							<Segment stacked>
                                {this.state.hasFormErrors && <Label pointing="below" color="red" >{this.state.errorMessage}</Label>}
								<Form.Input onChange={this.handleChange} value={email} name="email" fluid icon="user" iconPosition="left" placeholder="Email"/>
								<Form.Input onChange={this.handleChange} value={password} name="password" fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />
								<Button onClick={this.handleLogin} color="blue">Sign in</Button>
							
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