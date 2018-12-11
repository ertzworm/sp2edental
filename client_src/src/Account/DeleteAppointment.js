import React, {Component} from 'react';
import {Button, Modal, Form, Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class DeleteAppointment extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: true,
            item: this.props.item,
            details: '',
        }

        this.getAppointment = this.getAppointment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount(){
        this.getAppointment();
    }

    onSubmit(e){
        e.preventDefault();
    }

    onDelete(){
        let appointmentId = this.props.match.params.id;
        axios.delete("http://localhost:3001/api/appointments/" +appointmentId).then(
            reponse => {
                this.props.history.push('/account/profile/');
            }
        )
    }

    getAppointment(){
        let appointmentId = this.props.match.params.id;
        axios.get("http://localhost:3001/api/appointments/" + appointmentId).then( response =>
            this.setState({ details: response.data }
            )
        )
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){

        const { open, dimmer } = this.state;
        const {details} = this.state;

        return(
            <span>
        
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>Delete Chart</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                    <p>Are you sure you want to delete?</p>
                    <p>
                        Date: {this.state.details.date}
                    </p>

                    <p>
                        Time: {this.state.details.time}
                    </p>

                    <p>
                        With: {this.state.details.lastName}, {this.state.details.firstName}
                    </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    
                    <Link to="/account/profile/" className="ui button negative">Cancel</Link>
                    <Button onClick={this.onDelete} positive>Confirm</Button>
                </Modal.Actions>
            </Modal>
          </span>
        );
    }
}

export default DeleteAppointment;