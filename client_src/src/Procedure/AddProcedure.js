import React, {Component} from 'react';
import {Button, Modal, Form, Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class AddProcedure extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: true,
            name: '',
            description: '',
            price: 0
        }

        this.onAdd = this.onAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onAdd(){
        const newProcedure = {
            name: this.state.name,
            description: this.state.description,
            price: parseInt( this.state.price, 10)
        }
        
        axios.request({
            method: "post",
            url: "http://localhost:3001/api/procedures/",
            data: newProcedure
        }).then(response => {
            this.props.history.push("/tabs/procedures")  ;
        })
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){

        const {open, dimmer} = this.state;

        return(
            <span>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>Add Procedure</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input onChange={this.handleChange} value={this.state.name} label="Procedure Name" name="name" type="text" placeholder="Procedure Name" ref="name"></Form.Input>
                                <Form.Input onChange={this.handleChange} value={this.state.description} label="Description" name="description" type="text" placeholder="Description" ref="description"></Form.Input>
                                <Form.Input onChange={this.handleChange} value={this.state.price} label="Price" name="price" type="text" placeholder="Price" ref="price"></Form.Input>
                            </Form.Group>
                            
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    
                    <Link to="/tabs/procedures/" className="ui button negative">Cancel</Link>
                    <Button onClick={this.onAdd} positive>Confirm</Button>
                </Modal.Actions>
            </Modal>
            </span>
        );
    }
}

export default AddProcedure;