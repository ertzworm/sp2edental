import React, {Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';

const sexOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

const civilStatusOption = [
    {key: 's', text: 'Single', value: 'single'},
    {key: 'm', text: 'Married', value: 'married'},
    {key: 'w', text: 'Widowed', value: 'widowed'}
]

class AddPatient extends Component{

    state = { open: false }


    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){

        const { open, size } = this.state

        return(
            <span>
               <Button onClick={this.show('small')} color="blue">Add Patient</Button>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Add Patient</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="First Name" placeholder="First Name"></Form.Input>
                                <Form.Input fluid label="Middle Name" placeholder="Middle Name"></Form.Input>
                                <Form.Input fluid label="Last Name" placeholder="Last Name"></Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select label="Sex" options={sexOptions} placeholder="Sex" />
                                <Form.Select label="Civil Status" options={civilStatusOption} placeholder="Civil Status" />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input fluid label="Birthdate" placeholder="Birthdate"></Form.Input>
                                <Form.Input fluid label="Occupation" placeholder="Occupation"></Form.Input>
                                <Form.Input fluid label="Contact Number" placeholder="Contact Number"></Form.Input>
                            </Form.Group>

                            <Form.Input fluid label="Address" placeholder="Address"></Form.Input>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>Cancel</Button>
                        <Button onClick={this.close} positive>Confirm</Button>
                    </Modal.Actions>
                </Modal>
            </span>
        );
    }
}

export default AddPatient;