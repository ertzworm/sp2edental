import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from './Constants/Home.js';

import Signin from './Constants/Signin.js';
import PatientLayout from './Patient/PatientLayout.js';


import AccountLayout from './Account/AccountLayout.js';
import AccountProfile from './Account/AccountProfile';
import PatientProfileLayout from './Patient/PatientProfileLayout.js';


//Medicine Components
import MedicineLayout from './Medicine/MedicineLayout.js';
import AddMedicine from './Medicine/AddMedicine';
import EditMedicine from './Medicine/EditMedicine';
import DeleteMedicine from './Medicine/DeleteMedicine';

//Procure Components
import ProcedureLayout from './Procedure/ProcedureLayout.js';
import AddProcedure from './Procedure/AddProcedure';
import EditProcedure from './Procedure/EditProcedure';
import DeleteProcedure from './Procedure/DeleteProcedure';


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


                        {/* Medicines */}
                        <Route path="/tabs/medicines/" exact component={MedicineLayout}></Route>
                        <Route path="/tabs/medicines/add" exact component={AddMedicine}></Route>
                        <Route path="/tabs/medicines/edit/:id" exact component={EditMedicine}></Route>
                        <Route path="/tabs/medicines/delete/:id" exact component={DeleteMedicine}></Route>
                        



                        <Route path="/tabs/procedures/" exact component={ProcedureLayout}></Route>
                        <Route path="/tabs/procedures/add" exact component={AddProcedure}></Route>
                        <Route path="/tabs/procedures/edit/:id" exact component={EditProcedure}></Route>
                        <Route path="/tabs/procedures/delete/:id" exact component={DeleteProcedure}></Route>



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