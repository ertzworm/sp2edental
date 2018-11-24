import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import Nav from '../Constants/Nav';
import Leftwing from '../Constants/Leftwing';
import AccountDetails from './AccountDetails';

class AccountProfile extends Component{
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
						<AccountDetails>

						</AccountDetails>
					</Grid.Column>
                </Grid>
                

            </div>
        );
    }
}

export default AccountProfile;