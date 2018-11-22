import React, {Component} from 'react';
import {Grid, Divider, GridColumn, Container, Header, Placeholder} from 'semantic-ui-react';
//import PatientProfile from '../Patient/PatientProfile';
import PatientTab from '../Patient/PatientTab.js';
import Leftwing from './Leftwing';
import Nav from './Nav';


class Layout extends Component{
    render(){
        return(
            <div>

                <Nav>

                </Nav>

               <Grid relaxed columns={2}>
                    <Grid.Column width={3}>
                        <Leftwing>

                        </Leftwing>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <PatientTab>
                            
                        </PatientTab>
                    </Grid.Column>

               </Grid>
                
            </div>
        );
    }
}

export default Layout;