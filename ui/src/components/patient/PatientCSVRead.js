import React from 'react';
import {Input} from 'semantic-ui-react';
import axios from 'axios';


const PatientCSVRead = () => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;

        var temp = [];
        var temp2 = [];
        var parsedPatient = {};

        temp = content.split("\n");

       
        
        var i=0;

        for(i=0; i<temp.length; i++){
            temp2 = temp[i].split(",");
            
            parsedPatient = {
                firstName: temp2[0],
                middleName: temp2[1],
                lastName: temp2[2],
                sex: temp2[3],
                age: temp2[4],
                civilStatus: temp2[5],
                occupation: temp2[6],
                contactNumber: temp2[7],
                address: temp2[8],
            }


            axios.request({
                method: "post",
                url: "http://localhost:3001/api/patients/",
                data: parsedPatient
            }).then(response => {
            }).catch(err => console.log(err));
        }

        alert("Parsed " +temp.length+ " lines");

    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }



    return(
        <span>
            <br></br><Input type="file" id="file" className="input-file" accept=".csv" onChange={ e => handleFileChosen(e.target.files[0])}></Input>
        </span>
    )
};

export default PatientCSVRead;