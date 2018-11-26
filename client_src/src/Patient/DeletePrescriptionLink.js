import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const DeletePrescriptionLink = ({ item }) =>
    <Link className="ui button negative" to={"/tabs/prescriptions/delete/" +item.id}>Delete</Link>;
 

export default DeletePrescriptionLink;