import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const DeleteImageLink = ({ item }) =>
    <Link className="ui button negative" to={"/tabs/images/delete/" +item.id}>Delete</Link>;
 

export default DeleteImageLink;