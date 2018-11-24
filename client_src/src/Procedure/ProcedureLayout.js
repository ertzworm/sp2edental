import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import ProcedureTab from '../Procedure/ProcedureTab.js';
import Leftwing from '../Constants/Leftwing';
import Nav from '../Constants/Nav';


class ProcedureLayout extends Component{
    
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
                        <ProcedureTab>

                        </ProcedureTab>
                    </Grid.Column>

               </Grid>
                
            </div>
        );
    }
}

export default ProcedureLayout;