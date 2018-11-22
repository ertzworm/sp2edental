import React, {Component} from 'react';
import {Menu, Input, Image, Label} from 'semantic-ui-react';
import image from '../images/square-image.png';


class Leftwing extends Component{

    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name})

    render(){

        const {activeItem} = this.state;

        return(
            
            <Menu vertical color="blue">
                <Menu.Item>
                    <center>
                        <Image src={image} circular size="small" />
                    </center>
                </Menu.Item>


                <Menu.Item>
                    <Input placeholder="Search the site..."></Input>
                </Menu.Item>

                <Menu.Item>
                    Dr. Squeeps Kowalksi
                </Menu.Item>

                <Menu.Item>
                    Home
                    <Menu.Menu>
                        <Menu.Item name="profile" active={activeItem == 'profile'} onClick={this.handleItemClick}>Profile</Menu.Item>
                        <Menu.Item name="patients" active={activeItem == 'patients'} onClick={this.handleItemClick}>Patients</Menu.Item>
                        <Menu.Item name="pedicines" active={activeItem == 'medicines'} onClick={this.handleItemClick}>Medicines</Menu.Item>
                        <Menu.Item name="procedures" active={activeItem == 'procedures'} onClick={this.handleItemClick}>Procedures</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

              
                    
                <Menu.Item name="inbox" active={activeItem == 'inbox'} onClick={this.handleItemClick}><Label color="blue"> 2</Label>Inbox</Menu.Item>
                <Menu.Item name="spam" active={activeItem == 'spam'} onClick={this.handleItemClick}>Spam</Menu.Item>
                <Menu.Item name="sent" active={activeItem == 'sent'} onClick={this.handleItemClick}>Sent</Menu.Item>
                <Menu.Item name="starred" active={activeItem == 'starred'} onClick={this.handleItemClick}>Starred</Menu.Item>
                    


                
            
            </Menu> 
        );
    }
}


export default Leftwing;