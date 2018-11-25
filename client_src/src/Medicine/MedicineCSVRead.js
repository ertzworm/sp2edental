import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import axios from 'axios';


const MedicineCSVRead = () => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);

        var temp = new Array();
        var temp2 = new Array();
        var parsedMedicine = {};

        temp = content.split("\n");

        console.log(temp);
        
        var i=0;
        var j=0;

        console.log("Parsing the following: ");
        for(i=0; i<temp.length; i++){
            temp2 = temp[i].split(",");
            
            parsedMedicine = {
                genericName: temp2[1],
                brandName: temp2[0],
                quantity: parseInt( temp2[2])
            }

            axios.request({
                method: "post",
                url: "http://localhost:3001/api/medicines/",
                data: parsedMedicine
            }).then(response => {
                
            })
        }

        alert("Parsed " +temp.length+ " lines");

    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }



    return(
        <div>
            <Input type="file" id="file" className="input-file" accept=".csv" onChange={ e => handleFileChosen(e.target.files[0])}></Input>
        </div>
    )
};

export default MedicineCSVRead;