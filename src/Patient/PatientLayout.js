import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';


import PatientTab from '../Patient/PatientTab.js';
import Leftwing from '../Constants/Leftwing';
import Nav from '../Constants/Nav';


class PatientLayout extends Component{

    
    
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

export default PatientLayout;