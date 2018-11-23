import React, {Component} from 'react';
import {Button, Header, Container, Image, Card, Grid, GridColumn} from 'semantic-ui-react';
import PatientCollection from './PatientCollection';
import matthew from '../images/matthew.png';

class PatientProfile extends Component{
    render(){
        return(
            <div>
					
				<Grid columns={2} divided>
					<Grid.Column width={4}>
						<Card>
							<Image src={matthew} />
							<Header className="centered">Henrik Goldstein</Header>
							<Card.Content>
								<Card.Meta>
									<span className="date">April 18, 1995 | Male</span>
								</Card.Meta>
							
								<Card.Description>
									<p>3rd St., 3rd., Aurea Subd., City of San Fernando</p>
									<p>09265035246</p>
								</Card.Description>
							</Card.Content>

							<Card.Content extra inline>
								<Container inline>
									<Button size="tiny">View </Button>
									<Button size="tiny">Edit </Button>
									<Button size="tiny" negative>X </Button>
								</Container>
							</Card.Content>
						</Card>
					</Grid.Column>

					<Grid.Column width={10}>
						<PatientCollection></PatientCollection>
					</Grid.Column>
				</Grid>
            </div>
        );
    }
}

export default PatientProfile	;