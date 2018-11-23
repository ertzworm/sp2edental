import React, {Component} from 'react';
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

import {Link} from 'react-router-dom';

class Signin extends Component{
    render(){
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
                           Welcome to eDental!
                        </Header>
			
                        <Form size="large">
							<Segment stacked>
								<Form.Input fluid icon="user" iconPosition="left" placeholder="Username" />

								<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

								<Link to="/tabs/patients/" className="ui button positive">
								Sign-in!
								</Link>
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