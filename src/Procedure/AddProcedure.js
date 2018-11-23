import React, {Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';

class AddProcedure extends Component{

    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){

        const { open, size } = this.state

        return(
            <span>
               <Button onClick={this.show('small')} color="blue">Add Procedure</Button>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Add Procedure</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="Procedure" placeholder="Procedure"></Form.Input>
                                <Form.Input fluid label="Description" placeholder="Description"></Form.Input>
                                <Form.Input fluid label="Price" placeholder="Price"></Form.Input>

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

export default AddProcedure;