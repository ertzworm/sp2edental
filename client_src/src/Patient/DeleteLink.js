import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteLink extends Component{

    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }


    render(){

        console.log("Delete passed id:" +this.props.item.id);
        return(
            <span>
                <Link className="ui button red" to={"/tabs/patients/delete/" +this.props.item.id}>
                    Delete
                </Link>
            </span>
        );
    }
}

export default DeleteLink;