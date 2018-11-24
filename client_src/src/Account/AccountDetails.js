import React, {Component} from 'react';
import {Form, Button, Segment, Divider, Header} from 'semantic-ui-react';


class AccountDetails extends Component{

    constructor(props){
        super(props);
        
        //These are accessed
        this.state = {
            labelInf: "Edit",
            isEdit: true,
        }
        
        
    }

        setLabel(){
            console.log(this.state.isEdit);

            if(this.state.isEdit === true){
                this.setState({ labelInf: "Confirm"});
                this.setState({ isEdit: false });
               
            }else{
                this.setState({ labelInf: "Edit"});
                this.setState({ isEdit: true});
            }            
        }


    render(){

        //Pass your state parameters from the constructor to your render function
        //Access them as initialized
        const {labelInf} = this.state;

        return(
            <div>

                <Button onClick={this.setLabel.bind(this)} positive>{labelInf}</Button>

                <Segment stacked>
                    <Form>

                        <Header>Security</Header>

                        <Form.Group>
                            <Form.Input width={5} label="Username" placeholder="ertzunltd" readOnly></Form.Input>
                            <Form.Input width={5} label="Password" placeholder="******" type="password" readOnly></Form.Input>
                        </Form.Group>

                        <Divider></Divider>

                        <Header>Personal Information</Header>

                        <Form.Group widths="equal">
                            <Form.Input fluid label="First Name" placeholder="Squeeps" readOnly></Form.Input>
                            <Form.Input fluid label="Middle Name" placeholder="Nai" readOnly></Form.Input>
                            <Form.Input fluid label="Last Name" placeholder="Kowalksi" readOnly></Form.Input>    
                        </Form.Group>

                        
                        
                        <Form.Group widths="equal">
                            <Form.Input fluid label="Civil Status" placeholder="Married" readOnly></Form.Input>
                            <Form.Input fluid label="Occupation" placeholder="Acting Dentist" readOnly></Form.Input>
                            <Form.Input fluid label="Sex" placeholder="Male" readOnly></Form.Input>
                        </Form.Group>

                        <Form.Group widths="equal">
                            <Form.Input fluid label="License Number" placeholder="2541535" readOnly></Form.Input>
                            <Form.Input fluid label="Ptr Number" placeholder="254774" readOnly></Form.Input>
                            <Form.Input fluid label="Contact Number" placeholder="+639265035246" readOnly></Form.Input>
                            <Form.Input fluid label="Birthday" placeholder="April 18, 1995" readOnly></Form.Input>
                        </Form.Group>

                        
                    </Form>
                </Segment>
                

            </div>
        );
    }
}

export default AccountDetails;