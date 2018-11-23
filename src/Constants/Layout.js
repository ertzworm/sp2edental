import React, {Component} from 'react';
import {Grid, Divider, GridColumn, Container, Header, Placeholder} from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import PatientProfile from '../Patient/PatientProfile';
import PatientTab from '../Patient/PatientTab.js';
import MedicineTab from '../Medicine/MedicineTab.js';
import ProcedureTab from '../Procedure/ProcedureTab.js';
import AccountTab from '../Account/AccountTab.js';
import Leftwing from './Leftwing';
import Nav from './Nav';
import Tabs from './Tabs';
import PatientProfileLayout from '../Patient/PatientProfileLayout';


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
                        <Router>
                            <Tabs>
                                <Route path="/tabs/patients" exact component={PatientTab}></Route>
                                <Route path="/tabs/medicines" exact component={MedicineTab}></Route>
                                <Route path="/tabs/procedures" exact component={ProcedureTab}></Route>
                                <Route path="/account/" exact component={AccountTab}></Route>
                                <Route path="/tabs/patients/alec" exact component={PatientProfile}></Route>                                
                            </Tabs>
                        </Router>
                    </Grid.Column>

               </Grid>
                
            </div>
        );
    }
}

export default Layout;