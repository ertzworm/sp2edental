import React, {Component} from 'react';
import {Accordion, Icon} from 'semantic-ui-react';
import PrescriptionHistoryTable from './PrescriptionHistoryTable';
import DentalImages from './DentalImages';
import DentalCharts from './DentalCharts';
import ConsultationHistory from './ConsultationHistory';


class PatientCollection extends Component{

    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render(){

        const {activeIndex} = this.state;
        
        return(
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Prescription History
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 0}>
					<PrescriptionHistoryTable>

					</PrescriptionHistoryTable>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Dental Images
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 1}>
                    <DentalImages>

                    </DentalImages>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Dental Charts
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 2}>
                    <DentalCharts>

                    </DentalCharts>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                    <Icon name="dropdown"></Icon>Consultation History
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 3}>
                    <ConsultationHistory>

                    </ConsultationHistory>
                </Accordion.Content>

                
                
            </Accordion>
        );
    }
}

export default PatientCollection;