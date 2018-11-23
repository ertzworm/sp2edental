import React, {Component} from 'react';
import {Input, Container, Header, Menu, Button, Segment, Table, Pagination} from 'semantic-ui-react';
import AddProcedure from './AddProcedure';

class ProcedureTab extends Component{
    render(){
        return(
            <div>

                <Container>
                    <Container textAlign="center">
                        <Header>Procedures' Tab</Header>
                        <Input icon="search" placeholder="Search"></Input>

                    </Container>

                    <br></br>   
                    <Container>
                        <Segment attached="bottom">
                            <Menu.Item>
                                <AddProcedure></AddProcedure>
                                <Button color="green">Parse Procedure CSV</Button>
                            </Menu.Item>

                            <Table celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            Procedure ID
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Procedure
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Description
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Price
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Actions
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            0021
                                        </Table.Cell>

                                        <Table.Cell>
                                            Tooth Extraction
                                        </Table.Cell>

                                        <Table.Cell>
                                            Dentist removes specified tooth
                                        </Table.Cell>

                                        <Table.Cell>
                                            400
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                Edit
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            1234
                                        </Table.Cell>

                                        <Table.Cell>
                                            Cleansing
                                        </Table.Cell>

                                        <Table.Cell>
                                            Sanitizes teeth
                                        </Table.Cell>

                                        <Table.Cell>
                                            100
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                Edit
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            7866
                                        </Table.Cell>

                                        <Table.Cell>
                                            Bracing
                                        </Table.Cell>

                                        <Table.Cell>
                                            Adds foundation to teeth
                                        </Table.Cell>

                                        <Table.Cell>
                                            20000
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                Edit
                                            </Button>

                                            <Button negative>
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            4631
                                        </Table.Cell>

                                        <Table.Cell>
                                            Filling
                                        </Table.Cell>

                                        <Table.Cell>
                                            Adds fillings to tooth
                                        </Table.Cell>

                                        <Table.Cell>
                                            400
                                        </Table.Cell>

                                        <Table.Cell>
                                            <Button positive>
                                                Edit
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

export default ProcedureTab;