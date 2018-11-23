import React, {Component} from 'react';
import {Input, Container, Header, Menu, Button, Segment, Table, Pagination} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import AddPatient from './AddPatient';
import DeleteModal from '../Constants/DeleteModal.js';



class PatientTab extends Component{
    render(){
        return(
            <div>

                <Container>
                    <Container textAlign="center">
                        <Header>Patients' Tab</Header>
                        <Input icon="search" placeholder="Search"></Input>

                    </Container>

                    <br></br>   
                    <Container>
                        <Segment attached="bottom">
                            <Menu.Item>
                                <AddPatient></AddPatient>
                                <Button color="green">Parse Patient CSV</Button>
                            </Menu.Item>

                            <Table celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            Patient Number
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Last Name
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            First Name
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Middle Name
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Actions
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            201431213
                                        </Table.Cell>

                                        <Table.Cell>
                                            Bardiano
                                        </Table.Cell>

                                        <Table.Cell>
                                            Alec
                                        </Table.Cell>

                                        <Table.Cell>
                                            Berueda
                                        </Table.Cell>

                                        <Table.Cell inline>
                                            <Link to="/tabs/patients/alec" className="ui button positive">
                                                View                                            
                                            </Link>

                                            <DeleteModal>

                                            </DeleteModal>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            201248268
                                        </Table.Cell>

                                        <Table.Cell>
                                            Leonardo
                                        </Table.Cell>

                                        <Table.Cell>
                                            Isaiah Earvin Michael
                                        </Table.Cell>

                                        <Table.Cell>
                                            Valentin
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                View
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            201451041
                                        </Table.Cell>

                                        <Table.Cell>
                                            Salvador
                                        </Table.Cell>

                                        <Table.Cell>
                                            Katrina Anne
                                        </Table.Cell>

                                        <Table.Cell>
                                            Nuguid
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                View
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            201446313
                                        </Table.Cell>

                                        <Table.Cell>
                                            Mendoza
                                        </Table.Cell>

                                        <Table.Cell>
                                            Seanod
                                        </Table.Cell>

                                        <Table.Cell>
                                            Paras
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                View
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    
                                </Table.Body>
                                


                            </Table>

                            <Segment textAlign="center">
                                <Pagination defaultActivePage={5} totalPages={5} />
                            </Segment>

                        </Segment>
                    </Container>
                </Container>
                
            </div>
        );
    }
}

export default PatientTab;