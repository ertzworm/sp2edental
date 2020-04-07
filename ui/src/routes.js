import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


//@ MODULES
import Home from './components/constants/home';
import Signin from './Constants/Signin'

//Account
// import AccountProfile from './Account/AccountProfile';
// import DeleteAppointment from './Account/DeleteAppointment';

//Patient Components
// import PatientLayout from './Patient/PatientLayout';
// import PatientProfileLayout from './Patient/PatientProfileLayout';
// import AddPatient from './Patient/AddPatient';
// import EditPatient from './Patient/EditPatient';
// import DeletePatient from './Patient/DeletePatient';

//Consultations
// import DeleteConsultation from './Patient/DeleteConsultation';
// import AddConsultation from './Patient/AddConsultation';

//Prescriptions
// import AddPrescription from './Patient/AddPrescription';
// import DeletePrescription from './Patient/DeletePrescription';

//Charts
// import AddChart from './Patient/AddChart';
// import ViewChart from './Patient/ViewChart';
// import DeleteChart from './Patient/DeleteChart';

//Images
// import AddImage from './Patient/AddImage';
// import DeleteImage from './Patient/DeleteImage';

//Medicine Components
// import MedicineLayout from './Medicine/MedicineLayout';
// import AddMedicine from './Medicine/AddMedicine';
// import EditMedicine from './Medicine/EditMedicine';
// import DeleteMedicine from './Medicine/DeleteMedicine';

//Procure Components
// import ProcedureLayout from './Procedure/ProcedureLayout';
// import AddProcedure from './Procedure/AddProcedure';
// import EditProcedure from './Procedure/EditProcedure';
// import DeleteProcedure from './Procedure/DeleteProcedure';

//@ MAIN
const NotFound = () => <h2>Route not found!</h2>;

const checkAuth = () => {
    const userName = localStorage.getItem("userName");
    const isVerified = localStorage.getItem("isVerified");

    if (!userName) {
        alert("No user login found!")
        localStorage.clear();
        return false;
    }else if(isVerified === "false"){
        alert("User not verified!");
        localStorage.clear();
        return false;
    }    
    return true;
  }


const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/signin' }} />
      )
  )} />
)


class AppRoutes extends Component{
  render(){
    return(
      <Router>
        <Home>
          <Switch>
            <Redirect strict exact from="/" to="/signin/"></Redirect>
            <Route path="/signin/" exact component={Signin}></Route>

            {/* Patients */}
            {/* <AuthRoute path="/tabs/patients/" exact component={PatientLayout}></AuthRoute>
            <AuthRoute path="/tabs/patients/view/:id" exact component={PatientProfileLayout}></AuthRoute>
            <AuthRoute path="/tabs/patients/add" exact component={AddPatient}></AuthRoute>
            <AuthRoute path="/tabs/patients/edit/:id" exact component={EditPatient}></AuthRoute>
            <AuthRoute path="/tabs/patients/delete/:id" exact component={DeletePatient}></AuthRoute> */}

            {/* Images */}
            {/* <AuthRoute path="/tabs/images/add/:id" exact component={AddImage}></AuthRoute>
            <AuthRoute path="/tabs/images/delete/:id" exact component={DeleteImage}></AuthRoute> */}

            {/* Consultations */}
            {/* <AuthRoute path="/tabs/consultations/:id" exact component={DeleteConsultation}></AuthRoute>
            <AuthRoute path="/tabs/consultations/add/:id" exact component={AddConsultation}></AuthRoute> */}

            {/* Prescriptions */}
            {/* <AuthRoute path="/tabs/prescriptions/add/:id" exact component={AddPrescription}></AuthRoute>
            <AuthRoute path="/tabs/prescriptions/delete/:id" exact component={DeletePrescription}></AuthRoute>  */}
            
            {/* Charts */}
            {/* <AuthRoute path="/tabs/charts/view/:id" exact component={ViewChart}></AuthRoute>
            <AuthRoute path="/tabs/charts/add/:id" exact component={AddChart}></AuthRoute>
            <AuthRoute path="/tabs/charts/delete/:id" exact component={DeleteChart}></AuthRoute> */}


            {/* Medicines */}
            {/* <AuthRoute path="/tabs/medicines/" exact component={MedicineLayout}></AuthRoute>
            <AuthRoute path="/tabs/medicines/add" exact component={AddMedicine}></AuthRoute>
            <AuthRoute path="/tabs/medicines/edit/:id" exact component={EditMedicine}></AuthRoute>
            <AuthRoute path="/tabs/medicines/delete/:id" exact component={DeleteMedicine}></AuthRoute> */}
            
            {/* Procedures */}
            {/* <AuthRoute path="/tabs/procedures/" exact component={ProcedureLayout}></AuthRoute>
            <AuthRoute path="/tabs/procedures/add" exact component={AddProcedure}></AuthRoute>
            <AuthRoute path="/tabs/procedures/edit/:id" exact component={EditProcedure}></AuthRoute>
            <AuthRoute path="/tabs/procedures/delete/:id" exact component={DeleteProcedure}></AuthRoute> */}


            {/* Accounts */}
            {/* <AuthRoute path="/account/profile/" exact component={AccountProfile}></AuthRoute>
            <AuthRoute path="/account/profile/appointments/delete/:id" exact component={DeleteAppointment}></AuthRoute> */}

            <Route component={NotFound}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default AppRoutes;