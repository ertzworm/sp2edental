import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';


class DentalCharts extends Component{
    render(){
        return(
            <div>
                <p>White: Ok | Yellow: For Restoration | Red: For Extraction | Black: No tooth</p>
            

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Chart Number
                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Chart
                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Date Procured
                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Actions
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>

                            <Table.Cell>
                                <p>1</p>
                            </Table.Cell>

                            <Table.Cell>
                                <Button fluid>View</Button>
                            </Table.Cell>

                            <Table.Cell>
                                April 07, 2018
                            </Table.Cell>

                            <Table.Cell>
                                <Button positive>Edit</Button>
                                <Button negative>Delete</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <p>2</p>
                            </Table.Cell>

                            <Table.Cell>
                                <Button fluid>View</Button>
                            </Table.Cell>

                            <Table.Cell>
                               November 19, 1995
                            </Table.Cell>

                            <Table.Cell>
                                <Button positive>Edit</Button>
                                <Button negative>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default DentalCharts;