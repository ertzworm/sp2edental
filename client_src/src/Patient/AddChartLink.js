import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const AddChartsLink = ({ item }) =>
    <Link className="ui button positive" to={"/tabs/charts/add/" +item.id}>Add Chart</Link>;
 

export default AddChartsLink;