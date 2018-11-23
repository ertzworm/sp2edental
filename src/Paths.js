import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Constants/Home.js';

import PatientLayout from './Patient/PatientLayout.js';
import MedicineLayout from './Medicine/MedicineLayout.js';
import ProcedureLayout from './Procedure/ProcedureLayout.js';
import AccountLayout from './Account/AccountLayout.js';
import PatientProfileLayout from './Patient/PatientProfileLayout.js';



const Index = () => <h2>Home</h2>;


class LandingPage extends Component{
    render(){
        return(
            <Router>
                
                <Home>
                    <Route path="/tabs/patients/" exact component={PatientLayout}></Route>
                    <Route path="/tabs/medicines/" exact component={MedicineLayout}></Route>
                    <Route path="/tabs/procedures/" exact component={ProcedureLayout}></Route>
                    <Route path="/account/" exact component={AccountLayout}></Route>
                    <Route path="/tabs/patients/alec/" exact component={PatientProfileLayout}></Route>
                   
                </Home>
            </Router>
        );
    }
}

export default LandingPage;