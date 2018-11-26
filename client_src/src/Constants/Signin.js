import React, {Component} from 'react';
import {Form, Grid, Header, Message, Segment, Button} from 'semantic-ui-react';

import {Link} from 'react-router-dom';
import axios from 'axios';

class Signin extends Component{

    constructor(props){
        super(props);
        this.state = {
            accessToken: '',
            email: '',
            password: '',
            userToken: '',
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleLogin(){
        console.log("email is: " +this.state.email);
        console.log("password is: " +this.state.password);

        const userData = {
            email: this.state.email,
            password: this.state.password
        }


        axios.request({
            method: "post",
            url: "http://localhost:3001/api/Users/login",
            data: userData
        }).then(response => {
            localStorage.setItem("tokenId", response.data.id)
            localStorage.setItem("tokenTtl", response.data.ttl)
            localStorage.setItem("currentUserId", response.data.userId)
            this.props.history.push("/tabs/patients");
        }).catch(err => console.log(err))

    }



    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                           Welcome to eDental! {userToken.ttl}
                        </Header>
			
                        <Form size="large">
							<Segment stacked>
								<Form.Input onChange={this.handleChange} value={email} name="email" fluid icon="user" iconPosition="left" placeholder="Username" />

								<Form.Input onChange={this.handleChange} value={password} name="password" fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

								<Button onClick={this.handleLogin} positive>Sign in</Button>
							
							</Segment>
                        </Form>

						<Message>
							No account? <strong>Sign up!</strong>
						</Message>
                    </Grid.Column>
                </Grid>

            
            </div>
        );
    }
}

export default Signin;