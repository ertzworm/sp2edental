import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Layout from './Constants/Layout.js';
import Home from './Constants/Home.js';
import PatientProfile from './Patient/PatientProfile.js';
import PatientProfileLayout from './Patient/PatientProfileLayout.js';

const Index = () => <h2>Home</h2>;


class LandingPage extends Component{
    render(){
        return(
            <Router>
                
                <Home>
                    <Route path="/hey/" component={Index}></Route>
                    <Route path="/tabs/patients/" exact component={Layout}></Route>
                    <Route path="/tabs/medicines/" exact component={Layout}></Route>
                    <Route path="/tabs/procedures/" exact component={Layout}></Route>
                    <Route path="/account/" exact component={Layout}></Route>
                    <Route path="/tabs/patients/alec/" exact component={PatientProfileLayout}></Route>
                </Home>
            </Router>
        );
    }
}

export default LandingPage;