import React, {Component} from 'react';
import {Input, Container, Header, Menu, Button, Segment, Table, Pagination} from 'semantic-ui-react';


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
                                <Button color="blue">Add Procedure</Button>
                                <Button color="green">Parse Procedure CSV</Button>
                            </Menu.Item>

                            <Table celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            Medicine ID
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Generic Name
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Brand Name
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Quantity
                                        </Table.HeaderCell>

                                        <Table.HeaderCell>
                                            Actions
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            8754
                                        </Table.Cell>

                                        <Table.Cell>
                                            Paracetamol
                                        </Table.Cell>

                                        <Table.Cell>
                                            Biogesic
                                        </Table.Cell>

                                        <Table.Cell>
                                            121
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
                                            2012
                                        </Table.Cell>

                                        <Table.Cell>
                                            Ibuprufen
                                        </Table.Cell>

                                        <Table.Cell>
                                            Alaxan
                                        </Table.Cell>

                                        <Table.Cell>
                                            889
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
                                            7411
                                        </Table.Cell>

                                        <Table.Cell>
                                            Carbocisteine
                                        </Table.Cell>

                                        <Table.Cell>
                                            Solmux
                                        </Table.Cell>

                                        <Table.Cell>
                                            323
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
                                            Ibuprufen
                                        </Table.Cell>

                                        <Table.Cell>
                                            Advil
                                        </Table.Cell>

                                        <Table.Cell>
                                            781
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