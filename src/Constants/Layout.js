import React, {Component} from 'react';
import {Grid, Divider, GridColumn, Container, Header, Placeholder} from 'semantic-ui-react';
//import PatientProfile from '../Patient/PatientProfile';
import PatientTab from '../Patient/PatientTab.js';
import MedicineTab from '../Medicine/MedicineTab.js';
import ProcedureTab from '../Procedure/ProcedureTab.js';
import AccountTab from '../Account/AccountTab.js';
import Leftwing from './Leftwing';
import Nav from './Nav';


class Layout extends Component{

    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    
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
                        <AccountTab>

                        </AccountTab>
                    </Grid.Column>

               </Grid>
                
            </div>
        );
    }
}

export default Layout;