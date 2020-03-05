import React, {Component} from 'react';

//@ MODULES
import {Form, Grid, Header, Message, Segment, Button} from 'semantic-ui-react';
import Signup from './Signup';

//@ UTILS
const api = require('../api')

class Signin extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleLogin = async () => {
        const { email, password } = this.state;
    }

    handleChange = (event) => {
        const { target } = event;
        const {value, name} = target

        this.setState({
            [name]: value
        });
    }

    render(){

        console.log(api);
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
								<Form.Input onChange={this.handleChange} value={email} name="email" fluid icon="user" iconPosition="left" placeholder="Username" />

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