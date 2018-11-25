import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const DeleteChartLink = ({ item }) =>
    <Link className="ui button negative" to={"/tabs/charts/delete/" +item.id}>Delete</Link>;
 

export default DeleteChartLink;