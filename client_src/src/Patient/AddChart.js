import React, {Component} from 'react';
import {Button, Divider, Container, Modal, Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

let colorGuide= [
    "blue",
    "yellow",
    "red",
    "black"
];

let fromPatient;


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
            ],
            patientId: '',
            date: '',
        }
        
        this.onAdd = this.onAdd.bind(this);
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

      onAdd(){
        
        fromPatient = this.props.match.params.id;
        
        
        const newChart = {
            upperteeth: this.state.upperteeth,
            lowerteeth: this.state.lowerteeth,
            date: Date.now(),
            patientId: fromPatient
        }


        axios.request({
            method: "post",
            url: "http://localhost:3001/api/charts/" ,
            data: newChart
        }).then(response => {
            const currentDate = new Date();
            const newLog = {
                activity: "Added chart to patient: " +fromPatient,
                date: currentDate,
                user: localStorage.userName,

            }

            axios.request({
                method: "post",
                url: "http://localhost:3001/api/logs/",
                data: newLog
            })
            
            this.props.history.push("/tabs/patients/");
        })
    }

    

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){

        const {open, size, dimmer} = this.state;

        
        return(
            
            <div>

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
                        <Link to="/tabs/patients/" className="ui button negative">Cancel</Link>
                        <Button onClick={this.onAdd} positive>Confirm</Button>
                    </Modal.Actions>
                </Modal>

                </div>
           
    
        )
    }

}

export default AddChart;