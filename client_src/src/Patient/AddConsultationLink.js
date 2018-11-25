import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const AddConsultationLink = ({ item }) =>
    <Link className="ui button positive" to={"/tabs/consultations/add/" +item.id}>Add Consultation</Link>;
 

export default AddConsultationLink;