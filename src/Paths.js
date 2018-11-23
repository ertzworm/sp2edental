import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from './Constants/Home.js';

import Signin from './Constants/Signin.js';
import PatientLayout from './Patient/PatientLayout.js';
import MedicineLayout from './Medicine/MedicineLayout.js';
import ProcedureLayout from './Procedure/ProcedureLayout.js';
import AccountLayout from './Account/AccountLayout.js';
import AccountProfile from './Account/AccountProfile';
import PatientProfileLayout from './Patient/PatientProfileLayout.js';


const Index = () => <h2>Home</h2>;
const NotFound = () => <h2>Route not found!</h2>;


class LandingPage extends Component{
    render(){
        return(
            <Router>
                
                <Home>
                    <Switch>
                        <Redirect strict exact from="/" to="/tabs/patients"></Redirect>
                        <Route path="/signin/" exact component={Signin}></Route>
                        <Route path="/tabs/patients/" exact component={PatientLayout}></Route>
                        <Route path="/tabs/medicines/" exact component={MedicineLayout}></Route>
                        <Route path="/tabs/procedures/" exact component={ProcedureLayout}></Route>
                        <Route path="/account/" exact component={AccountLayout}></Route>
                        <Route path="/account/profile/" exact component={AccountProfile}></Route>
                        <Route path="/tabs/patients/alec/" exact component={PatientProfileLayout}></Route>
                        <Route component={NotFound}></Route>
                
                    </Switch>
                    
                </Home>
            </Router>
        );
    }
}

export default LandingPage;