import React, {Component} from 'react';
import Nav from '../Constants/Nav.js';
import PatientProfile from './PatientProfile.js';

class PatientProfileLayout extends Component{
    render(){
        return(
            <div>
                <Nav>

                </Nav>

                <PatientProfile>

                </PatientProfile>

            </div>
        );
    }
}

export default PatientProfileLayout;