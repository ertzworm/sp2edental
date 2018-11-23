import React, {Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';

class AddMedicine extends Component{

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){

        const { open, size } = this.state

        return(
            <span>
               <Button onClick={this.show('small')} color="blue">Add Medicine</Button>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Add Medicine</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="Brand Name" placeholder="Brand Name"></Form.Input>
                                <Form.Input fluid label="Generic Name" placeholder="Generic Name"></Form.Input>
                                <Form.Input fluid label="Quantity" placeholder="Quantity"></Form.Input>
                            </Form.Group>
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

export default AddMedicine;