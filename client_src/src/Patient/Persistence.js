import React, {Component} from 'react';
import axios from 'axios';

let getPatientQuery = "http://localhost:3001/api/Patients/5bf969091656522d855d8801";

class Persistence extends Component{

    constructor(props){
        super(props);
        this.state={
            patient: [],
        }
    }

    componentDidMount(){
        
            axios.get(getPatientQuery).then(response =>{
                this.setState({ patients: response.data }, ()=>{
                    console.log(this.state.patients);
                })
            })
        
    }

    render(){
        return(
            <div>
                {/* <DataPersistence item = {patients}></DataPersistence> */}
            </div>
        )
    }
}

export default Persistence;