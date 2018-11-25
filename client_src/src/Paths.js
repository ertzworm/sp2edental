import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from './Constants/Home.js';

import Signin from './Constants/Signin.js';



import AccountLayout from './Account/AccountLayout.js';
import AccountProfile from './Account/AccountProfile';

//Patient Components
import PatientLayout from './Patient/PatientLayout.js';
import PatientProfileLayout from './Patient/PatientProfileLayout.js';
import AddPatient from './Patient/AddPatient';
import EditPatient from './Patient/EditPatient';
import DeletePatient from './Patient/DeletePatient';

//Consultations
import DeleteConsultation from './Patient/DeleteConsultation';
import AddConsultation from './Patient/AddConsultation';

//Charts
import AddChart from './Patient/AddChart';
import ViewChart from './Patient/ViewChart';
import DeleteChart from './Patient/DeleteChart';

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

                        {/* Patients */}
                        <Route path="/tabs/patients/" exact component={PatientLayout}></Route>
                        <Route path="/tabs/patients/view/:id" exact component={PatientProfileLayout}></Route>
                        <Route path="/tabs/patients/add" exact component={AddPatient}></Route>
                        <Route path="/tabs/patients/edit/:id" exact component={EditPatient}></Route>
                        <Route path="/tabs/patients/delete/:id" exact component={DeletePatient}></Route> 

                        {/* Consultations */}
                        <Route path="/tabs/consultations/:id" exact component={DeleteConsultation}></Route>
                        <Route path="/tabs/consultations/add/:id" exact component={AddConsultation}></Route>
                        
                        {/* Charts */}
                        <Route path="/tabs/charts/view/:id" exact component={ViewChart}></Route>
                        <Route path="/tabs/charts/add/:id" exact component={AddChart}></Route>
                        <Route path="/tabs/charts/delete/:id" exact component={DeleteChart}></Route>


                        {/* Medicines */}
                        <Route path="/tabs/medicines/" exact component={MedicineLayout}></Route>
                        <Route path="/tabs/medicines/add" exact component={AddMedicine}></Route>
                        <Route path="/tabs/medicines/edit/:id" exact component={EditMedicine}></Route>
                        <Route path="/tabs/medicines/delete/:id" exact component={DeleteMedicine}></Route>
                        
                        {/* Procedures */}
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