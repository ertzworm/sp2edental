import React, {Component} from 'react';
import {Button, Divider, Container, Modal, Form} from 'semantic-ui-react';
import axios from 'axios';

let colorGuide= [
    "blue",
    "yellow",
    "red",
    "black"
];


class ViewChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            condition: 0,
            size: "fullscreen",
            color: 'blue',
            upperteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ],
            lowerteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
        }
    }

    onUpdateItemUpperTeeth = i => {
        this.setState(state => {
            const upperteeth = state.upperteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                upperteeth,
            };
        });

      };

      onUpdateItemLowerTeeth = i => {
        this.setState(state => {
            const lowerteeth = state.lowerteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                lowerteeth,
            };
        });
      };
    

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){

        const {open, size, dimmer} = this.state;

        
        return(

            <Modal size={size} dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Add Chart</Modal.Header>
                    <Modal.Content>
                        <Form>
                             
                            <Container text-align="center">
                                <p>Legend</p>
                                <Button.Group width="4">
                                    <Button basic color="blue">OK</Button>
                                    <Button basic color="yellow">For Restoration</Button>
                                    <Button basic color="red">For Extraction</Button>
                                    <Button basic color="black">Missing tooth</Button>
                                </Button.Group>
                                
                                
                                <h2> Upper Teeth </h2>    
                                    {this.state.upperteeth.map((item, index) => (
                                          
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemUpperTeeth(index)} >{index}</Button>
                                    ))}

                                <Divider></Divider>
                            
                                    {this.state.lowerteeth.map((item, index) => (
                                        
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemLowerTeeth(index)}>{index}</Button>
                                        
                                    ))}
                                
                                <h2> Lower teeth </h2>
                            </Container>
                            
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button>Cancel</Button>
                        <Button onClick={this.onAdd} positive>Confirm</Button>
                    </Modal.Actions>
                </Modal>
           
    
        )
    }

}

export default import React, {Component} from 'react';
import {Button, Divider, Container, Modal, Form} from 'semantic-ui-react';
import 

let colorGuide= [
    "blue",
    "yellow",
    "red",
    "black"
];


class AddChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            condition: 0,
            size: "fullscreen",
            color: 'blue',
            upperteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ],
            lowerteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
        }
    }

    onUpdateItemUpperTeeth = i => {
        this.setState(state => {
            const upperteeth = state.upperteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                upperteeth,
            };
        });

      };

      onUpdateItemLowerTeeth = i => {
        this.setState(state => {
            const lowerteeth = state.lowerteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                lowerteeth,
            };
        });
      };
    

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){

        const {open, size, dimmer} = this.state;

        
        return(

            <Modal size={size} dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Add Chart</Modal.Header>
                    <Modal.Content>
                        <Form>
                             
                            <Container text-align="center">
                                <p>Legend</p>
                                <Button.Group width="4">
                                    <Button basic color="blue">OK</Button>
                                    <Button basic color="yellow">For Restoration</Button>
                                    <Button basic color="red">For Extraction</Button>
                                    <Button basic color="black">Missing tooth</Button>
                                </Button.Group>
                                
                                
                                <h2> Upper Teeth </h2>    
                                    {this.state.upperteeth.map((item, index) => (
                                          
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemUpperTeeth(index)} >{index}</Button>
                                    ))}

                                <Divider></Divider>
                            
                                    {this.state.lowerteeth.map((item, index) => (
                                        
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemLowerTeeth(index)}>{index}</Button>
                                        
                                    ))}
                                
                                <h2> Lower teeth </h2>
                            </Container>
                            
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button>Cancel</Button>
                        <Button onClick={this.onAdd} positive>Confirm</Button>
                    </Modal.Actions>
                </Modal>
           
    
        )
    }

}

export default import React, {Component} from 'react';
import {Button, Divider, Container, Modal, Form} from 'semantic-ui-react';
import 

let colorGuide= [
    "blue",
    "yellow",
    "red",
    "black"
];


class AddChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            condition: 0,
            size: "fullscreen",
            color: 'blue',
            upperteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ],
            lowerteeth: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
            ]
        }
    }

    onUpdateItemUpperTeeth = i => {
        this.setState(state => {
            const upperteeth = state.upperteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                upperteeth,
            };
        });

      };

      onUpdateItemLowerTeeth = i => {
        this.setState(state => {
            const lowerteeth = state.lowerteeth.map((item, j) => {
                if (j === i) {
                    //Conditions
                    if(item < 3){
                        return item + 1;
                    }else{
                        return item = 0;
                    }
                } else {
                    return item;
                }
            });
            return {
                lowerteeth,
            };
        });
      };
    

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){

        const {open, size, dimmer} = this.state;

        
        return(

            <Modal size={size} dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Add Chart</Modal.Header>
                    <Modal.Content>
                        <Form>
                             
                            <Container text-align="center">
                                <p>Legend</p>
                                <Button.Group width="4">
                                    <Button basic color="blue">OK</Button>
                                    <Button basic color="yellow">For Restoration</Button>
                                    <Button basic color="red">For Extraction</Button>
                                    <Button basic color="black">Missing tooth</Button>
                                </Button.Group>
                                
                                
                                <h2> Upper Teeth </h2>    
                                    {this.state.upperteeth.map((item, index) => (
                                          
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemUpperTeeth(index)} >{index}</Button>
                                    ))}

                                <Divider></Divider>
                            
                                    {this.state.lowerteeth.map((item, index) => (
                                        
                                        <Button key={index} circular color={colorGuide[item]} onClick={()=> this.onUpdateItemLowerTeeth(index)}>{index}</Button>
                                        
                                    ))}
                                
                                <h2> Lower teeth </h2>
                            </Container>
                            
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button>Cancel</Button>
                        <Button onClick={this.onAdd} positive>Confirm</Button>
                    </Modal.Actions>
                </Modal>
           
    
        )
    }

}

export default ViewChart;